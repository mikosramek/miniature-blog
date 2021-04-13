import style from './style.module.scss';
import get from 'lodash.get';

export default function ImageLoader({ image, size, mobileImage = null }) {
  const alt = get(image, 'alt', '');
  const url = get(image , 'url', '');
  const mUrl = get(mobileImage , 'url', '');
  return (
    <div className={`${size === 'square' ? style.containerSquare : style.container169}`}>
      <picture className={style.picture}>
        <source media="(min-width: 600px)" srcSet={url} />
        <source media="(max-width: 599px)" srcSet={mUrl} />
        <img src={url} alt={alt} className={style.image} />
      </picture>
    </div>
  )
}
