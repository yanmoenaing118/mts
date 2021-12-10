import styles from "./../../styles/Player.module.scss";
import { FaVolumeOff } from "react-icons/fa";
import { Link } from "react-router-dom";

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

  let translationOptions = avaliableLanguages.map((lang) => {
    return (
      <li key={lang} onClick={seeTranslation}>
        {lang}
      </li>
    );
  });
  let addTranslationLink = (
    <li className={styles.actions_addtran}>
      <Link to="add-translation">translate</Link>
    </li>
  );
  translationOptions.push(addTranslationLink);
  return (
    <div className={styles.actions}>
      <div>
        <button onClick={showLyricHandler}>
          <span>Lyric</span>
        </button>
        <button className={styles.tran}>
          <ul>{translationOptions}</ul>
          <span>Translation</span>
        </button>
        <button>
          <FaVolumeOff size={24} color="#fff" />
        </button>
      </div>
    </div>
  );
}
