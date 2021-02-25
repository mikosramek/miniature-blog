import style from './style.module.scss';
import ImageLoader from "../ImageLoader/ImageLoader";
import { parseUnitForPage } from "../../utils/prismicHelpers";
import { RichText } from 'prismic-reactjs';

export default function UnitHeader({ unit }) {
  const { unitName, description, largeImage } = parseUnitForPage(unit);
  return (
    <section className={style.section}>
      <div className={style.image}>
        <ImageLoader image={largeImage} size='169'/>
      </div>
      <div className="wrapper">
        <h1
          className={style.name}
        >
          { unitName }
        </h1>
        <div className={style.desc}>
          {
            RichText.render(description)
          }
        </div>
      </div>
    </section>
  )
}
