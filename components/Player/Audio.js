import styles from "./../../styles/Player.module.scss";
import { FaStepForward, FaStepBackward, FaPlay, FaPause } from "react-icons/fa";
import { BsFillSkipForwardFill, BsSkipBackwardFill } from "react-icons/bs";
import { createRef, useState } from "react";
import { useSelector } from "react-redux";

import lib from "../../lib";

export default function Audio({ setLyricParasPosition, setActiveLyric, src }) {
  const [currentTime, setCurrentTime] = useState(0);
  const [audioEndTime, setAudioEndTime] = useState(0);
  const [progressWidth, setProgressWidth] = useState(0);
  const [playing, setPlaying] = useState(false);
  const audioRef = createRef();

  const lyrics = useSelector((state) => state.player.lyrics);

  const updateTimeHandler = (e) => {
    if (lyrics.length == 0) {
      return;
    }

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
          <span>{lib.getTimeFormat(currentTime)}</span>
          <div className={styles.player_progressbar} onClick={skipToHandler}>
            <div
              className={styles.progress}
              style={{
                width: `${progressWidth}%`,
              }}
            ></div>
          </div>
          <span>{lib.getTimeFormat(audioEndTime)}</span>
        </div>
      </div>
    </div>
  );
}
