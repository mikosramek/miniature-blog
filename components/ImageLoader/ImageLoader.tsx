import style from './style.module.scss';
import get from 'lodash.get';

export default function ImageLoader({ image, size }) {
  const alt = get(image, 'alt', '');
  const url = get(image , 'url', '');
  return (
    <div className={size === 'square' ? style.containerSquare : style.container169}>
      <img className={style.image} src={url} alt={alt} />
    </div>
  )
}
