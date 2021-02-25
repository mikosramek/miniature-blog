import style from './style.module.scss';
import Featured from "../Slices/Featured/Featured";
import Double from "../Slices/Double/Double";
import Grid from "../Slices/Grid/Grid";

export default function HomeSlices({ slices }) {
  return (
    <main className={style.main}>
      {
        slices.map((slice, i) => {
          switch(slice.slice_type) {
            case 'double_feature':
              return (
                <Double key={i} items={slice.items} />
              )
            case 'grid':
              return (
                <Grid key={i} items={slice.items} />
              )
            case 'feature':
            default:
              return (
                <Featured key={i} unit={slice} />
              )
          }
        })
      }
    </main>
  )
}
