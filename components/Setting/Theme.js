import { useDispatch, useSelector } from "react-redux";
import styles from "./../../styles/Setting.module.scss";
import Image from "next/image";
import { changeTheme } from "../../store/setting";

export default function Theme() {
  let photos = useSelector((state) => state.theme.photos);
  let photoElements = null;
  const dispatch = useDispatch();

  const changeThemeHandler = (theme_src) => {
    dispatch(
      changeTheme({
        theme_src: theme_src,
      })
    );
  };

  const renderPhotos = () => {
    if (photos.length > 0) {
      photoElements = photos.map((photo) => {
        // console.log(photo.urls.raw);
        return (
          <div
            className={styles.theme_item}
            onClick={() => changeThemeHandler(photo.urls.regular)}
          >
            <Image src={photo.urls.small} layout="fill" objectFit="cover" />
          </div>
        );
      });
      return photoElements;
    }
    return <div>Loading...</div>;
  };
  return (
    <div className={styles.theme}>
      <h3>Theme</h3>
      <div className={styles.theme_photos}>{renderPhotos()}</div>
    </div>
  );
}
