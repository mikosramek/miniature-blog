import style from './style.module.scss';
import ImageLoader from "../../ImageLoader/ImageLoader";
import {parseUnit} from "../../../utils/prismicHelpers";
import Link from "next/link";

export default function Featured({ unit }) {
  console.info(unit , 'Featured.tsx@Featured');
  const { unitName, slug, shortDesc, largeImage, type } = parseUnit(unit.primary);
  console.info({ largeImage }, 'Featured.tsx@Featured');
  const url = `/${type}/${encodeURIComponent(slug)}`;
  return (
    <section className={style.section}>
      <div className={`${style.wrapper} wrapper`}>
        <h3
          className={style.name}
        >
          {unitName}
        </h3>
      </div>
      <span className={style.gradient} />
      <Link href={url}>
        <a className={style.link}><ImageLoader image={largeImage} size='169' /></a>
      </Link>
    </section>
  )
}
