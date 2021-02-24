import { Client } from '../../prismic-configuration';
import { queryRepeatableDocuments } from '../../utils/queries';

export default function Post ({ unit }) {
  console.info(unit , 'army/[slug].tsx@Post');
  return (
    <h2>Army!</h2>
  )
}

export async function getStaticProps({params}) {
  const client = Client();
  const unit = (await client.getByUID('army', params.slug, {}));
  return {
    props: {
      unit
    }
  }
}

export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments()
  return {
    paths: documents.map(doc => `army/${doc.uid}`),
    fallback: true
  }
}
