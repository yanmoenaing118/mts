import styles from "./../../styles/TranslationEditor.module.scss";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";
import { useState } from "react";
export default function TranslationEditor() {
  const languages = ["english", "korean", "japanese", "chinese"];
  const [showLanguages, setShowLanguages] = useState(false);
  const [translateInto, setIranslateInto] = useState("");
  return (
    <div className={styles.translationEditor}>
      <div className={styles.translationEditor_wrapper}>
        <div className={styles.translationEditor_header}>
          <h1>Add translation</h1>
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
                  <li key={lang} onClick={() => console.log(lang)}>
                    {lang}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <div className={styles.translationEditor_main}>
          {translateInto !== "" ? <h3>Translate Into {translateInto}</h3> : ""}
        </div>
      </div>
    </div>
  );
}
