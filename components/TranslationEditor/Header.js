import { VscChevronDown, VscChevronUp, VscClose } from "react-icons/vsc";
import { useState } from "react";
import styles from "./../../styles/TranslationEditor.module.scss";
export default function Header() {
  const [showLanguages, setShowLanguages] = useState(false);
  const [translateInto, setTranslateInto] = useState("");
  const languages = ["english", "korean", "japanese", "chinese"];
  return (
    <div className={styles.translationEditor_header}>
      {translateInto !== "" ? (
        <h1
          style={{
            textTransform: "capitalize",
          }}
        >
          {translateInto}
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
              <li key={lang} onClick={() => setTranslateInto(lang)}>
                {lang}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
