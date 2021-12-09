import styles from "./../../styles/Player.module.scss";
import { FaVolumeOff } from "react-icons/fa";

export default function Actions({
  showLyric,
  setShowLyric,
  avaliableLanguages,
  setCurrentLanguage,
}) {
  const showLyricHandler = () => {
    setShowLyric(!showLyric);
  };

  const seeTranslation = (e) => {
    const lang = e.target.textContent;
    setCurrentLanguage(lang);
  };
  return (
    <div className={styles.actions}>
      <div>
        <button onClick={showLyricHandler}>
          <span>Lyric</span>
        </button>
        <button className={styles.tran}>
          <ul>
            {avaliableLanguages.map((lang) => {
              return (
                <li key={lang} onClick={seeTranslation}>
                  {lang}
                </li>
              );
            })}
          </ul>
          <span>Translation</span>
        </button>
        <button>
          <FaVolumeOff size={24} color="#fff" />
        </button>
      </div>
    </div>
  );
}
