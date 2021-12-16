import { VscChevronDown, VscChevronUp, VscClose } from "react-icons/vsc";
import { useState } from "react";
import styles from "./../../styles/TranslationEditor.module.scss";
import { useSelector } from "react-redux";
import { setLanguage } from "../../store/editor";
import { useDispatch } from "react-redux";
export default function Header() {
  const dispatch = useDispatch();
  const [showLanguages, setShowLanguages] = useState(false);
  const language = useSelector((state) => state.editor.language);
  const languages = ["english", "korean", "japanese", "chinese"];
  console.log(language);
  return (
    <div className={styles.translationEditor_header}>
      {language !== "" ? (
        <h1
          style={{
            textTransform: "capitalize",
          }}
        >
          {language}
        </h1>
      ) : (
        <h1>Add Translation</h1>
      )}
      <div className={styles.translationEditor_chooseLang}>
        <button onClick={() => setShowLanguages(!showLanguages)}>
          Choose language &nbsp;
          {showLanguages ? (
            <VscChevronUp size={18} color="#000" />
          ) : (
            <VscChevronDown size={18} color="#000" />
          )}
        </button>
      </div>
      {showLanguages && (
        <ul className={styles.translationEditor_langs}>
          {languages.map((lang) => {
            return (
              <li key={lang} onClick={() => dispatch(setLanguage(lang))}>
                {lang}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
