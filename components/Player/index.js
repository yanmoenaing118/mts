import styles from "./../../styles/Player.module.scss";

import Metadata from "./Metadata";
import Audio from "./Audio";
import Actions from "./Actions";
import { useState } from "react";
import Lyric from "./Lyric";
import { useSelector } from "react-redux";

export default function Player({ src }) {
  const [lyricParasPosition, setLyricParasPosition] = useState(0);
  const [activeLyric, setActiveLyric] = useState(null);
  const [showLyric, setShowLyric] = useState(false);
  const [lyricHeight, setLyricHeight] = useState(60);
  const [currentLanguage, setCurrentLanguage] = useState("lyric");

  let avaliableLanguages = useSelector((state) =>
    state.player.translations ? state.player.translations : []
  );
  const trackId = useSelector((state) => state.player.trackId);

  avaliableLanguages = Object.keys(avaliableLanguages);
  avaliableLanguages.push("lyric");

  return (
    <div className={styles.footerPlayer}>
      <Lyric
        lyricParasPosition={lyricParasPosition}
        activeLyric={activeLyric}
        showLyric={showLyric}
        lyricHeight={lyricHeight}
        currentLanguage={currentLanguage}
      />

      <div className={styles.footerPlayer_wrapper}>
        <Metadata />
        <Audio
          setLyricParasPosition={setLyricParasPosition}
          setActiveLyric={setActiveLyric}
          src={src}
        />
        <Actions
          setShowLyric={setShowLyric}
          showLyric={showLyric}
          setCurrentLanguage={setCurrentLanguage}
          avaliableLanguages={avaliableLanguages}
          trackId={trackId}
        />
      </div>
    </div>
  );
}
