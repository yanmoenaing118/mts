import styles from "./../../styles/Player.module.scss";
import { FaStepForward, FaStepBackward, FaPlay } from "react-icons/fa";
import { createRef, useState } from "react";

function getTimeFormat(time) {
  const currentMinute = Math.floor(time / 60);
  const currentSecond = Math.floor(time % 60);
  return currentMinute + ":" + currentSecond;
}

export default function Audio({
  lyrics,
  setLyricParasPosition,
  setActiveLyric,
}) {
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = createRef();
  const updateTimeHandler = (e) => {
    const currentTime = e.target.currentTime;
    setCurrentTime(currentTime);
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

  return (
    <div className={styles.player}>
      <audio
        src="https://myplaylist.vercel.app/static/media/for_one_person.20cab8c7.mp3"
        controls
        onTimeUpdate={updateTimeHandler}
        loop
        style={{ display: "none" }}
        autoPlay={true}
        ref={audioRef}
      />
      <div className={styles.player_wrapper}>
        <div className={styles.player_actions}>
          <button>
            <FaStepBackward size={20} color="#fff" />
          </button>
          <button>
            <FaPlay size={20} color="#fff" />
          </button>
          <button>
            <FaStepForward size={20} color="#fff" />
          </button>
        </div>
        <div className={styles.player_progress}>
          <span>{getTimeFormat(currentTime)}</span>
          <div className={styles.player_progressbar}></div>
          <span>3:31</span>
        </div>
      </div>
    </div>
  );
}
