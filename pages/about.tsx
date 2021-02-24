import Head from 'next/head'
import get from 'lodash.get';
import { Client } from '../prismic-configuration';
import { getRawText } from '../utils/prismicHelpers';
import PageHeader from "../components/PageHeader/PageHeader";
import PageMeta from "../components/PageMeta/PageMeta";
// import { queryRepeatableDocuments } from '../utils/queries';

export default function Home({ post }) {
  console.info(post, 'index.tsx@Home');
  const meta = {
    header : getRawText(get(post, 'data.header_text', ''))
  }

  return (
    <div className="Home">
      <PageMeta post={post} />
      <Head>
        <meta property="og:title" content={`${meta.header} - About`} key="ogtitle" />
      </Head>
      <PageHeader title={meta.header}/>
    </div>
  )
}

export async function getStaticProps() {
  const post = await Client().getSingle('home', {}, (document) => {
    return document;
  });
  return {
    props: {
      post
    }
  }
}
