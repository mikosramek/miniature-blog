import { Client } from '../../prismic-configuration';
import { queryRepeatableDocuments } from '../../utils/queries';
import UnitHeader from "../../components/UnitHeader/UnitHeader";
import PageMeta from "../../components/PageMeta/PageMeta";
import {parseUnitSlices} from "../../utils/prismicHelpers";
import UnitGallery from "../../components/UnitGallery/UnitGallery";

export default function Mini ({ unit }) {
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
            }
          })
        }
      </main>
    </>
  )
}

export async function getStaticProps({params}) {
  const unit = (await Client().getByUID('miniature', params.slug, {}));
  return {
    props: {
      unit
    }
  }
}

export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments('miniature');
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
