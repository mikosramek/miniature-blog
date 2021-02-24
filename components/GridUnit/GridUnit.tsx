import Link from 'next/link'
import style from './style.module.scss';
import ImageLoader from "../ImageLoader/ImageLoader";

export default function Grid({ unit }) {
  const { unitName, slug, shortDesc, thumbnail, type } = unit;
  const url = `/${type}/${encodeURIComponent(slug)}`;
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
