import styles from "./../../styles/TranslationEditor.module.scss";
import { VscClose } from "react-icons/vsc";

import { closeEditor } from "../../store/editor";
import { useDispatch } from "react-redux";
import Header from "./Header";
import EditorPlayer from "./EditorPlayer";
import EditorLyric from "./EditorLyric";
import AddTranslation from "./AddTranslation";
import { useEffect, useState } from "react";

export default function TranslationEditor() {
  const dispatch = useDispatch();
  const [lyric, setLyric] = useState([]);

  useEffect(() => {
    console.log("rendering...");
  });

  return (
    <div className={styles.translationEditor}>
      <button
        className={styles.translationEditor_close}
        onClick={() => dispatch(closeEditor())}
      >
        <VscClose size={33} color="#ffff" />
      </button>
      <div className={styles.translationEditor_wrapper}>
        <Header />
        <div className={styles.translationEditor_main}>
          <div className={styles.translationEditor_editor}>
            <EditorPlayer lyric={lyric} />
            <AddTranslation
              setLyric={(tran) => {
                const newLyric = lyric.concat(tran);
                setLyric(newLyric);
              }}
            />
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
