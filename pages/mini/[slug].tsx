import { Client } from '../../prismic-configuration';
import { queryRepeatableDocuments } from '../../utils/queries';

export default function Post ({ unit }) {
  console.info(unit , 'mini/[slug].tsx@Post');
  return (
    <h2>Mini!</h2>
  )
}

export async function getStaticProps({params}) {
  const client = Client();
  const unit = (await client.getByUID('miniature', params.slug, {}));
  return {
    props: {
      unit
    }
  }
}

export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments();
  return {
    paths: documents.map(doc => `mini/${doc.uid}`),
    fallback: true
  }
}
