import Link from 'next/link'
import style from './style.module.scss';
import ImageLoader from "../ImageLoader/ImageLoader";

export default function Grid({ unit }) {
  const { unitName, slug, thumbnail, type } = unit;
  let url = `/${type}/${encodeURIComponent(slug)}`;
  if (type === 'unit') {
    url = `/${encodeURIComponent(slug)}`;
  }
  return (
    <div className={style.container}>
      <span className={style.gradient} />
      <h3
        className={style.name}
      >
        { unitName }
      </h3>
      <Link href={url}>
        <a className={style.link}><ImageLoader image={thumbnail} size="square" /></a>
      </Link>
    </div>
  )
}
