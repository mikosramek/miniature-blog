import { useEffect } from "react";
import Head from 'next/head'
import get from 'lodash.get';
import { Client } from '../prismic-configuration';
import { getRawText } from '../utils/prismicHelpers';
import PageMeta from "../components/PageMeta/PageMeta";
import { useStore } from '../store/store';

export default function About({ post }) {
  const meta = {
    header : getRawText(get(post, 'data.header_text', ''))
  }

  const setTitle = useStore((state) => state.setTitle);

  useEffect(() => {
    // @ts-ignore
    setTitle(`${meta.header} - About`);
  }, []);

  return (
    <div className="About">
      <PageMeta post={post} />
      <Head>
        <meta property="og:title" content={`${meta.header} - About`} key="ogtitle" />
      </Head>
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
