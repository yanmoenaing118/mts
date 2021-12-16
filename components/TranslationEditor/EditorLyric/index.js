import { useSelector } from "react-redux";
import styles from "./../../../styles/TranslationEditor.module.scss";

export default function EditorLyric() {
  const lyrics = useSelector((state) => state.editor.lyrics);

  const renderLyrics = () => {
    if (lyrics.length === 0) return;
    return lyrics.map((l) => {
      const start = l.starttime.split(".")[0];
      const end = l.endtime.split(".")[0];

      return (
        <div className={styles.lyrics_item}>
          <div>{start}</div>
          <div>{l.lyric}</div>
          <div>{end}</div>
        </div>
      );
    });
  };

  return <div className={styles.lyrics}>{renderLyrics()}</div>;
}
