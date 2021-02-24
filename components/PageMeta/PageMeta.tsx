import Head from 'next/head'
import get from 'lodash.get';
import { getRawText } from '../../utils/prismicHelpers';

export default function PageMeta({ post }) {

  const meta = {
    description : getRawText(get(post, 'data.page_description', '')),
    title : getRawText(get(post, 'data.title', '')),
    header : getRawText(get(post, 'data.header_text', '')),
    previewImage :get(post, 'data.meta_image.url', '')
  }

  return (
    <div className="Home">
      <Head>
        <title>{meta.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content="https://miniature-blog.vercel.app/" key="ogurl" />
        <meta property="og:image" content={meta.previewImage} key="ogimage" />
        <meta property="og:site_name" content={meta.title} key="ogsitename" />
        <meta property="og:title" content={meta.header} key="ogtitle" />
        <meta property="og:description" content={meta.description} key="ogdesc" />
        <meta name="description" content={meta.description} />
      </Head>
    </div>
  )
}
