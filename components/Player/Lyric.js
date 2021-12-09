import styles from "./../../styles/Player.module.scss";

export default function Lyric({
  lyricParasPosition,
  activeLyric,
  showLyric,
  lyrics,
  lyricHeight,
  currentLanguage,
}) {
  return (
    <div
      className={styles.lyric}
      style={{
        height: showLyric ? "calc(100% - 96px)" : 0,
      }}
    >
      <div className={styles.lyric_wrapper}>
        <div
          className={styles.lyric_paras}
          style={{
            transform: `translateY(-${lyricParasPosition}px)`,
          }}
        >
          {lyrics.map((lyric, i) => {
            const lineClassName =
              i == activeLyric
                ? `${styles.lyric_line} ${styles.lyric_line_active}`
                : styles.lyric_line;
            return (
              <div
                key={i}
                className={lineClassName}
                style={{
                  height: `${lyricHeight}px`,
                }}
              >
                <p>{lyric.lyric}</p>
                <p>
                  {currentLanguage !== "none"
                    ? lyric.translations[currentLanguage]
                    : ""}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
