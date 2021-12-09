import styles from "./../../styles/Player.module.scss";
import { FaStepForward, FaStepBackward, FaPlay, FaPause } from "react-icons/fa";
import { BsFillSkipForwardFill, BsSkipBackwardFill } from "react-icons/bs";
import { createRef, useState } from "react";

function getTimeFormat(time) {
  const currentMinute = Math.floor(time / 60);
  const currentSecond = Math.floor(time % 60);
  return (
    currentMinute +
    ":" +
    (currentSecond < 10 ? "0" + currentSecond : currentSecond)
  );
}

export default function Audio({
  lyrics,
  setLyricParasPosition,
  setActiveLyric,
  src,
}) {
  const [currentTime, setCurrentTime] = useState(0);
  const [audioEndTime, setAudioEndTime] = useState(0);
  const [progressWidth, setProgressWidth] = useState(0);
  const [playing, setPlaying] = useState(false);
  const audioRef = createRef();

  const updateTimeHandler = (e) => {
    const currentTime = e.target.currentTime;
    setCurrentTime(currentTime);
    setProgressWidth((currentTime / audioEndTime) * 100);
    lyrics.forEach((lyric, i) => {
      const seekend = lyric.endtime;
      const min = Number(seekend.split(":")[0]) * 60;
      const sec = Number(seekend.split(":")[1]);
      const seekendTimestamp = min + sec;

      const seekTo = lyric.starttime;
      const seekmin = Number(seekTo.split(":")[0]) * 60;
      const seeksec = Number(seekTo.split(":")[1]);
      const seekcurrentTime = seekmin + seeksec;

      if (currentTime >= seekcurrentTime && currentTime <= seekendTimestamp) {
        if (i >= 4) {
          const newPos = (i - 3) * 60;
          setLyricParasPosition(newPos);
        } else {
          setLyricParasPosition(0);
        }
        setActiveLyric(i);
      }
    });
  };

  const audioMetadataLoadedHandler = (e) => {
    setAudioEndTime(e.target.duration);
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

  const skipToHandler = (e) => {
    const toSkip = e.pageX - e.target.getBoundingClientRect().left;
    const toSkipPercent = (toSkip / 300) * 100;
    audioRef.current.currentTime = (toSkipPercent / 100) * audioEndTime;
  };

  const skipSeconds = (dir, s) => {
    if (dir === "forward") {
      return (audioRef.current.currentTime += s);
    }

    audioRef.current.currentTime -= s;
  };

  return (
    <div className={styles.player}>
      <audio
        src={src}
        controls
        onTimeUpdate={updateTimeHandler}
        loop
        preload="metadata"
        type="audio/mpeg"
        style={{ display: "none" }}
        ref={audioRef}
        onLoadedMetadata={audioMetadataLoadedHandler}
      />
      <div className={styles.player_wrapper}>
        <div className={styles.player_actions}>
          <button onClick={() => skipSeconds("backward", 5)}>
            <BsSkipBackwardFill size={20} color="#fff" />
          </button>
          <button onClick={playPauseHandler}>
            {playing ? (
              <FaPause size={20} color="#fff" />
            ) : (
              <FaPlay size={20} color="#fff" />
            )}
          </button>
          <button onClick={() => skipSeconds("forward", 5)}>
            <BsFillSkipForwardFill size={20} color="#fff" />
          </button>
        </div>
        <div className={styles.player_progress}>
          <span>{getTimeFormat(currentTime)}</span>
          <div className={styles.player_progressbar} onClick={skipToHandler}>
            {/* <div
              className={styles.player_progressbar_cursor}
              ref={progressCursor}
              style={{
                left: `${cursorPos}px`,
              }}
            ></div> */}
            <div
              className={styles.progress}
              style={{
                width: `${progressWidth}%`,
              }}
            ></div>
          </div>
          <span>{getTimeFormat(audioEndTime)}</span>
        </div>
      </div>
    </div>
  );
}
