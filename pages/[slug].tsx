import { Client } from '../prismic-configuration';
import { queryRepeatableDocuments } from '../utils/queries';
import UnitHeader from '../components/UnitHeader/UnitHeader';
import PageMeta from '../components/PageMeta/PageMeta';
import UnitGallery from '../components/UnitGallery/UnitGallery';
import {parseUnitSlices} from '../utils/prismicHelpers';
import Grid from '../components/Slices/Grid/Grid';

export default function Unit ({ unit }) {
  const slices = parseUnitSlices(unit);
  return (
    <>
      <PageMeta post={unit} />
      <main>
        <UnitHeader unit={unit} />
        {
          slices.map((slice, i) => {
            switch(slice.type) {
              default:
              case 'gallery':
                return <UnitGallery items={slice.images} title={slice.title} key={i} />
              case 'unit':
                return <Grid items={slice.references} title={slice.title} key={i} />
            }
          })
        }
      </main>
    </>
  )
}

export async function getStaticProps({params}) {
  const unit = (await Client().getByUID('unit', params.slug, {
    fetchLinks : [
      'unit.unit_name',
      'unit.thumbnail'
    ]
  }));
  return {
    props: {
      unit
    }
  }
}

export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments('unit');
  const newPaths = [];
  documents.forEach((doc) => {
    newPaths.push({
      params: { slug : `${doc.uid}` }
    })
  });
  return {
    paths: newPaths,
    fallback: false
  }
}
