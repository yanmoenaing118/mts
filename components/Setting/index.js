import { useDispatch, useSelector } from "react-redux";
import styles from "./../../styles/Setting.module.scss";
import { closeSetting } from "../../store/setting";
import { VscClose } from "react-icons/vsc";
import { useEffect } from "react";
import { fetchUnsplashPhotos } from "../../store/unsplash";
import Theme from "./Theme";
export default function Setting() {
  const dispatch = useDispatch();

  const themePhotos = useSelector((state) => state.theme.photos);
  console.log(themePhotos);
  useEffect(() => {
    dispatch(fetchUnsplashPhotos());
  }, []);

  return (
    <div className={styles.setting}>
      <button
        className={styles.setting_close}
        onClick={() => dispatch(closeSetting())}
      >
        <VscClose size={33} color="#777" />
      </button>
      <div className={styles.setting_wrapper}>
        <Theme />
      </div>
    </div>
  );
}
