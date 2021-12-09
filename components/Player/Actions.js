import styles from "./../../styles/Player.module.scss";
import { FaVolumeOff } from "react-icons/fa";

export default function Actions({ showLyric, setShowLyric }) {
  const showLyricHandler = () => {
    console.log("HI");
    setShowLyric(!showLyric);
  };
  return (
    <div className={styles.actions}>
      <div>
        <button onClick={showLyricHandler}>
          <span>Lyric</span>
        </button>
        <button className={styles.tran}>
          <span>Translation</span>
        </button>
        <button>
          <FaVolumeOff size={24} color="#fff" />
        </button>
      </div>
    </div>
  );
}
