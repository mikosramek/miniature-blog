import Head from 'next/head'
import get from 'lodash.get';
import { Client } from '../prismic-configuration';
import { getRawText } from '../utils/prismicHelpers';
import PageHeader from "../components/PageHeader/PageHeader";
// import { queryRepeatableDocuments } from '../utils/queries';

export default function Home({ post }) {
    console.info(post, 'index.tsx@Home');
    const meta = {
      description : getRawText(get(post, 'data.page_description', '')),
      title : getRawText(get(post, 'data.title', '')),
      header : getRawText(get(post, 'data.header_text', ''))
    }

  return (
    <div className="Home">
      <Head>
        <title>{meta.title} - About</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={meta.description} />
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
