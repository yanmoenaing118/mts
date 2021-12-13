import styles from "./../../styles/TranslationEditor.module.scss";
import { VscChevronDown, VscChevronUp, VscClose } from "react-icons/vsc";
import { useState } from "react";
import { closeEditor } from "../../store/editor";
import { useDispatch } from "react-redux";
import EditorPlayer from "./EditorPlayer";
import Translation from "./Translation";

export default function TranslationEditor() {
  const languages = ["english", "korean", "japanese", "chinese"];
  const [showLanguages, setShowLanguages] = useState(false);
  const [translateInto, setTranslateInto] = useState("");
  const dispatch = useDispatch();
  return (
    <div className={styles.translationEditor}>
      <button
        className={styles.translationEditor_close}
        onClick={() => dispatch(closeEditor())}
      >
        <VscClose size={33} color="#ffff" />
      </button>
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
              <Translation />
            </div>
          </div>

          <div className={styles.editor_right}>
            <div className={styles.editor_right_wrapper}>
              <EditorPlayer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
