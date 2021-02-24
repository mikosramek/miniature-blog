import get from 'lodash.get';
import { Client } from '../prismic-configuration';
import { getRawText } from '../utils/prismicHelpers';
import PageHeader from "../components/PageHeader/PageHeader";
import HomeSlices from "../components/HomeSlices/HomeSlices";
import PageFooter from "../components/PageFooter/PageFooter";
import PageMeta from "../components/PageMeta/PageMeta";
// import { queryRepeatableDocuments } from '../utils/queries';

export default function Home({ post }) {
  const meta = {
    header : getRawText(get(post, 'data.header_text', ''))
  }
  const slices = get(post, 'data.body', []);

  return (
    <div className="Home">
      <PageMeta post={post} />
      <PageHeader title={meta.header}/>
      <HomeSlices slices={slices}/>
      <PageFooter />
    </div>
  )
}

export async function getStaticProps() {
  const post = await Client().getSingle('home', {
    fetchLinks : [
      'miniature.thumbnail',
      'miniature.big_image',
      'miniature.short_description',
      'miniature.unit_name',
      'army.thumbnail',
      'army.big_image',
      'army.short_description',
      'army.unit_name'
    ]
  }, (document) => {
    return document;
  });
  return {
    props: {
      post
    }
  }
}

// export async function getStaticPaths() {
//   const documents = await queryRepeatableDocuments((doc) => doc.type === 'post')
//   return {
//     paths: documents.map(doc => `/blog/${doc.uid}`),
//     fallback: true,
//   }
// }
