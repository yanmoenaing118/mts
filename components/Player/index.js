import styles from "./../../styles/Player.module.scss";

import Metadata from "./Metadata";
import Audio from "./Audio";
import Actions from "./Actions";
import { useState } from "react";
import Lyric from "./Lyric";
import { useSelector } from "react-redux";

export default function Player() {
  const [currentTime, setCurrentTime] = useState(0);
  const [lyricParasPosition, setLyricParasPosition] = useState(0);
  const [activeLyric, setActiveLyric] = useState(null);
  const [showLyric, setShowLyric] = useState(false);
  const [lyricHeight, setLyricHeight] = useState(60);
  const [currentLanguage, setCurrentLanguage] = useState("none");

  const lyrics = useSelector((state) => state.songs.songs[0].lyrics);
  const songSrc = useSelector((state) => state.songs.songs[0].src);

  const avaliableLanguages = Object.keys(lyrics[0].translations);
  avaliableLanguages.push("none");

  return (
    <div className={styles.footerPlayer}>
      <Lyric
        lyricParasPosition={lyricParasPosition}
        activeLyric={activeLyric}
        showLyric={showLyric}
        lyrics={lyrics}
        lyricHeight={lyricHeight}
        currentLanguage={currentLanguage}
      />

      <div className={styles.footerPlayer_wrapper}>
        <Metadata />
        <Audio
          lyrics={lyrics}
          setCurrentTime={setCurrentTime}
          setLyricParasPosition={setLyricParasPosition}
          setActiveLyric={setActiveLyric}
          src={songSrc}
        />
        <Actions
          setShowLyric={setShowLyric}
          showLyric={showLyric}
          setCurrentLanguage={setCurrentLanguage}
          avaliableLanguages={avaliableLanguages}
        />
      </div>
    </div>
  );
}
