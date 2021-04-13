import get from 'lodash.get';
import { Client } from '../prismic-configuration';
import { getRawText } from '../utils/prismicHelpers';
import HomeSlices from "../components/HomeSlices/HomeSlices";
import PageMeta from "../components/PageMeta/PageMeta";
import { useStore } from '../store/store';
import {useEffect} from "react";

export default function Home({ post }) {
  const meta = {
    header : getRawText(get(post, 'data.header_text', ''))
  }
  const slices = get(post, 'data.body', []);

  const setTitle = useStore((state) => state.setTitle);
  useEffect(() => {
    // @ts-ignore
    setTitle(meta.header);
  }, []);

  return (
    <div className="Home">
      <PageMeta post={post} />
      <HomeSlices slices={slices}/>
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
      'army.unit_name',
      'unit.thumbnail',
      'unit.big_image',
      'unit.short_description',
      'unit.unit_name'
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
