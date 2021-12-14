import { createRef, useState } from "react";
import styles from "./../../styles/TranslationEditorPlayer.module.scss";
import lib from "./../../lib";
import { FaPause, FaPauseCircle, FaPlayCircle } from "react-icons/fa";
export default function EditorPlayer({ lyric }) {
  const audioRef = createRef();
  const progressBarRef = createRef();

  const [currentTime, setCurrentTime] = useState(0);
  const [audioEndTime, setAudioEndTime] = useState(0);
  const [progressWidth, setProgressWidth] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [cursorPos, setCursorPos] = useState(0);
  const [showCursor, setShowCursor] = useState(false);
  const [activeTime, setActiveTime] = useState(0);

  const updateTimeHandler = (e) => {
    const currentTime = e.target.currentTime;
    setCurrentTime(currentTime);
    setProgressWidth((currentTime / audioEndTime) * 100);
    lyric.forEach((l) => {});
  };

  const audioMetadataLoadedHandler = (e) => {
    setAudioEndTime(e.target.duration);
  };

  const skip = (e) => {
    const pos = e.pageX - progressBarRef.current.getBoundingClientRect().left;
    const { width } = progressBarRef.current.getClientRects()["0"];
    const toSkipPercent = (pos / width) * 100;
    audioRef.current.currentTime = (toSkipPercent / 100) * audioEndTime;
  };

  const playPauseHandler = (e) => {
    if (audioRef.current.paused || audioRef.current.ended) {
      audioRef.current.play();
      setPlaying(true);
    } else {
      audioRef.current.pause();
      setPlaying(false);
    }
  };

  const progressBarOnMouseMove = (e) => {
    const pos = e.pageX - progressBarRef.current.getBoundingClientRect().left;
    const { width } = progressBarRef.current.getClientRects()["0"];
    const cursorPos = (pos / width) * 100;
    setShowCursor(true);
    setCursorPos(cursorPos);
    setActiveTime((cursorPos / 100) * audioEndTime);
  };

  return (
    <div className={styles.editorPlayer}>
      <audio
        src="https://myplaylist.vercel.app/static/media/for_one_person.20cab8c7.mp3"
        controls
        onTimeUpdate={updateTimeHandler}
        loop
        preload="metadata"
        type="audio/mpeg"
        style={{ display: "none" }}
        ref={audioRef}
        onLoadedMetadata={audioMetadataLoadedHandler}
      />

      <div className={styles.editorPlayer_lyric}>
        The wind speaks with your tone. The wind speaks with your tone.The wind
        speaks with your tone
      </div>

      <div className={styles.editorPlayer_duration}>
        <div>{lib.getTimeFormat(currentTime)}</div>
        <div>{lib.getTimeFormat(audioEndTime)}</div>
        <div
          className={styles.editorPlayer_duration_active}
          style={{
            left: `${cursorPos}%`,
          }}
        >
          {lib.getTimeFormat(activeTime)}
        </div>
      </div>

      <div
        className={styles.editorPlayer_progress}
        onMouseMove={progressBarOnMouseMove}
        onMouseOver={() => setShowCursor(true)}
        onMouseOut={() => setShowCursor(false)}
        onClick={skip}
        ref={progressBarRef}
      >
        <div
          className={styles.editorPlayer_progress_current}
          style={{
            width: `${progressWidth}%`,
          }}
        ></div>
      </div>

      <div className={styles.editorPlayer_play} onClick={playPauseHandler}>
        {playing ? (
          <FaPauseCircle size={30} color="red" />
        ) : (
          <FaPlayCircle size={30} color="red" />
        )}
      </div>
    </div>
  );
}
