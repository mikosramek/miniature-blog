import { Client } from '../../prismic-configuration';
import { queryRepeatableDocuments } from '../../utils/queries';
import UnitHeader from "../../components/UnitHeader/UnitHeader";
import PageMeta from "../../components/PageMeta/PageMeta";
import UnitGallery from "../../components/UnitGallery/UnitGallery";
import {parseUnitSlices} from "../../utils/prismicHelpers";
import Grid from "../../components/Slices/Grid/Grid";

export default function Army ({ unit }) {
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
  const unit = (await Client().getByUID('army', params.slug, {
    fetchLinks : [
      'miniature.unit_name',
      'miniature.thumbnail'
    ]
  }));
  return {
    props: {
      unit
    }
  }
}

export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments('army');
  const newPaths = [];
  documents.forEach((doc) => {
    newPaths.push({
      params: { slug : `${doc.uid}` }
    })
  });
  console.info(newPaths , '[slug].tsx@getStaticPaths');
  return {
    paths: newPaths,
    fallback: false
  }
}
