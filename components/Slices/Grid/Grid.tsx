import style from './style.module.scss';
import { parseUnit } from "../../../utils/prismicHelpers";
import GridUnit from "../../GridUnit/GridUnit";

export default function Grid({ items, title = '' }) {
  const parsedUnits = items.map(parseUnit);
  return (
    <section className={style.section}>
      <div className="wrapper">
        {
          title && <h3>
            { title }
          </h3>
        }
        <ul className={style.list}>
          {
            parsedUnits.map((unit, i) => {
              return (
                <li
                  key={`${i}-${unit.slug}`}
                  className={style.unit}
                >
                  <GridUnit unit={unit} />
                </li>
              )
            })
          }
        </ul>
      </div>
    </section>
  )
}
