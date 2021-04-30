import style from './style.module.scss';
import ImageLoader from "../ImageLoader/ImageLoader";
// @ts-ignore
import FullscreenIcon from '../../assets/svgs/fullscreen.svg';
// @ts-ignore
import ExitFullscreenIcon from '../../assets/svgs/exit-fullscreen.svg';
import {useState} from "react";

export default function GalleryImage({ image }) {

  const [isVisible, setIsVisible] = useState(false);

  const closeFullscreen = () => {
    setIsVisible(false);
  }
  const openFullscreen = () => {
    setIsVisible(true);
  }

  return (
    <div className={style.container}>
      <button
        className={style.thumbnail}
        onClick={openFullscreen}
      >
        <ImageLoader image={image} size="square"/>
      </button>
      <FullscreenIcon className={style.fullscreenIcon} />
      <div
        className={`${style.fullscreenImageContainer} ${isVisible ? style.fullscreenImageContainerVisible : ''}`}
        onClick={closeFullscreen}
      >
        <button className={style.fullscreenBacking} />
        <div onClick={(e) => {e.stopPropagation()}} className={style.fullscreenImageInner}>
          <ExitFullscreenIcon onClick={closeFullscreen} className={style.exitFullscreenIcon} />
          <ImageLoader image={image} size="square"/>
        </div>
      </div>
    </div>
  )
}
