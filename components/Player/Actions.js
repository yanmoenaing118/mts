import styles from "./../../styles/Player.module.scss";
import { FaVolumeOff } from "react-icons/fa";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { openEditor } from "../../store/songs";
import { setLyric } from "../../store/player";

export default function Actions({
  showLyric,
  setShowLyric,
  avaliableLanguages,
  setCurrentLanguage,
  trackId,
}) {
  const dispatch = useDispatch();
  const player = useSelector((state) => state.player);
  const showLyricHandler = () => {
    setShowLyric(!showLyric);
  };

  const seeTranslation = (e) => {
    const lang = e.target.textContent;
    // setCurrentLanguage(lang);
    dispatch(setLyric({ lang }));
  };

  let translationOptions = avaliableLanguages.map((lang) => {
    return (
      <li key={lang} onClick={seeTranslation}>
        {lang}
      </li>
    );
  });
  let addTranslationLink = (
    <li>
      <Link
        href={{
          pathname: "/translate",
          query: { trackId: encodeURIComponent(trackId) },
        }}
      >
        <a>translate</a>
      </Link>
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
