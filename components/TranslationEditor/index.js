import styles from "./../../styles/TranslationEditor.module.scss";

import Header from "./Header";
import EditorPlayer from "./EditorPlayer";
import EditorLyric from "./EditorLyric";
import AddTranslation from "./AddTranslation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function TranslationEditor({ track }) {
  useEffect(() => {
    console.log("rendering...");
  });

  const language = useSelector((state) => state.editor.language);

  return (
    <div className={styles.translationEditor}>
      <div className={styles.translationEditor_wrapper}>
        <Header />
        <div className={styles.translationEditor_main}>
          <div className={styles.translationEditor_editor}>
            <EditorPlayer src={track.src} />
            {language && <AddTranslation />}
          </div>
          <EditorLyric />
        </div>
        <div>
          <button>save translation</button>
        </div>
      </div>
    </div>
  );
}
