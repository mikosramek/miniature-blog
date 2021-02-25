import style from './style.module.scss';
import ImageLoader from "../ImageLoader/ImageLoader";

export default function UnitGallery({ items, title }) {
  return (
    <section className={style.section}>
      <div className="wrapper">
        <h3>
          { title }
        </h3>
        <ul className={style.list}>
          {
            items.map((image, i) => {
              return (
                <li
                  key={i}
                  className={style.unit}
                >
                  <ImageLoader image={image} size="square" />
                </li>
              )
            })
          }
        </ul>
      </div>
    </section>
  )
}
