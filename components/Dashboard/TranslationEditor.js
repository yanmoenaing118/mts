import styles from "./../../styles/TranslationEditor.module.scss";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";
import { useState } from "react";

export default function TranslationEditor() {
  const languages = ["english", "korean", "japanese", "chinese"];
  const [showLanguages, setShowLanguages] = useState(false);
  const [translateInto, setTranslateInto] = useState("");
  return (
    <div className={styles.translationEditor}>
      <div className={styles.translationEditor_wrapper}>
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
        <div className={styles.editor}>
          <div className={styles.editor_left}>
            <div className={styles.editor_left_wrapper}>
              <div className={styles.translation}>
                <form className={styles.translation_textbox}>
                  <textarea placeholder="..."></textarea>
                </form>
                <div className={styles.translation_timerange}>
                  <div className={styles.translation_timerange_input}>
                    <input
                      type="number"
                      className={styles.translation_timerange_input_min}
                      placeholder="00"
                      max={60}
                      min={0}
                    />

                    <input
                      type="number"
                      className={styles.translation_timerange_input_sec}
                      placeholder="00"
                      max={60}
                      min={0}
                    />
                  </div>
                  <div className={styles.translation_timerange_input}>
                    <input
                      type="number"
                      className={styles.translation_timerange_input_min}
                      placeholder="00"
                      max={60}
                      min={0}
                    />

                    <input
                      type="number"
                      className={styles.translation_timerange_input_sec}
                      placeholder="00"
                      max={60}
                      min={0}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.editor_right}>
            <div className={styles.editor_right_wrapper}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
