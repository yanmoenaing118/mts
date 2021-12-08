import styles from "./../../styles/Player.module.scss";

import Metadata from "./Metadata";
import Audio from "./Audio";
import Actions from "./Actions";
import { useState } from "react";

const lyrics = [
  {
    lyric: "The wind speaks with your tone",
    starttime: "00:18.294",
    endtime: "00:21.599",
  },
  {
    lyric: "Talking about the rain falling in the rain",
    starttime: "00:21.673",
    endtime: "00:24.678",
  },
  {
    lyric: "I pause in the dream",
    starttime: "00:25.825",
    endtime: "00:28.625",
  },
  {
    lyric: "Counting the years of memory",
    starttime: "00:29.141",
    endtime: "00:31.930",
  },
  {
    lyric: "Waiting for the passionate love",
    starttime: "00:32.309",
    endtime: "00:35.154",
  },
  {
    lyric: "I'd trade a lifetime of prosperity for a life of suffering",
    starttime: "00:35.554",
    endtime: "00:39.180",
  },
  {
    lyric: "Drink a bottle of wine and seat up the story",
    starttime: "00:39.440",
    endtime: "00:46.144",
  },
  {
    lyric: "Love is the residual warmth of the world",
    starttime: "00:46.792",
    endtime: "00:50.505",
  },
  {
    lyric: "The flowers bloom and fall leaving traces behind",
    starttime: "00:50.663",
    endtime: "00:54.173",
  },
  {
    lyric: "Keep the innocence in the passing years",
    starttime: "00:54.352",
    endtime: "00:57.216",
  },
  {
    lyric: "Only for you",
    starttime: "00:57.216",
    endtime: "01:00.495",
  },
  {
    lyric: "Love is the first spring in the wilderness",
    starttime: "01:01.537",
    endtime: "01:05.058",
  },
  {
    lyric: "Quietly open my heart",
    starttime: "01:05.437",
    endtime: "01:09.010",
  },
  {
    lyric: "No matter what happens",
    starttime: "01:09.437",
    endtime: "01:11.369",
  },
  {
    lyric: "I'll always be loyal to you",
    starttime: "01:11.369",
    endtime: "01:15.306",
  },
  {
    lyric: "The palm print in the hand",
    starttime: "01:35.683",
    endtime: "01:38.848",
  },
  {
    lyric: "It messes with the thoughts",
    starttime: "01:38.848",
    endtime: "01:42.784",
  },
  {
    lyric: "The endless gaze",
    starttime: "01:43.320",
    endtime: "01:46.360",
  },
  {
    lyric: "In every morning and evening",
    starttime: "01:46.444",
    endtime: "01:49.349",
  },
  {
    lyric: "Finding peace amidst the chaos",
    starttime: "01:49.770",
    endtime: "01:53.000",
  },
  {
    lyric: "Happiness and sadness, even If it's only for a moment",
    starttime: "01:53.523",
    endtime: "01:56.961",
  },
  {
    lyric: "Leave it to the moon and tell the story",
    starttime: "01:57.287",
    endtime: "02:03.592",
  },
  {
    lyric: "Love is the residual warmth of the world",
    starttime: "02:04.536",
    endtime: "02:07.831",
  },
  {
    lyric: "The flowers bloom and fall leaving trace behind",
    starttime: "02:08.326",
    endtime: "02:11.631",
  },
  {
    lyric: "Keep the innocence in the passing years",
    starttime: "02:11.631",
    endtime: "02:14.636",
  },
  {
    lyric: "Only for you",
    starttime: "02:14.636",
    endtime: "02:17.798",
  },
  {
    lyric: "Love is the first spring in the wilderness",
    starttime: "02:19.305",
    endtime: "02:22.669",
  },
  {
    lyric: "Quietly open my heart",
    starttime: "02:22.858",
    endtime: "02:26.599",
  },
  {
    lyric: "No matter what happens",
    starttime: "02:26.915",
    endtime: "02:28.636",
  },
  {
    lyric: "I'll always be loyal to you",
    starttime: "02:28.909",
    endtime: "02:33.503",
  },
  {
    lyric: "Love is the residual warmth of the world",
    starttime: "02:34.292",
    endtime: "02:37.332",
  },
  {
    lyric: "The flowers bloom and fall leaving traces behind",
    starttime: "02:37.669",
    endtime: "02:40.974",
  },
  {
    lyric: "Keep the innocence in the passing years",
    starttime: "02:41.258",
    endtime: "02:44.369",
  },
  {
    lyric: "Only for you",
    starttime: "02:44.369",
    endtime: ":02:48.221",
  },
  {
    lyric: "Love is the first spring in the wilderness",
    starttime: "02:48.737",
    endtime: "02:52.113",
  },
  {
    lyric: "Quietly open my heart",
    starttime: "02:52.439",
    endtime: "02:55.863",
  },
  {
    lyric: "No matter what happens",
    starttime: "02:56.463",
    endtime: "02:58.472",
  },
  {
    lyric: "I'll always be loyal to you",
    starttime: "02:58.472",
    endtime: "03:02.187",
  },
];

export default function Player() {
  const [currentTime, setCurrentTime] = useState(0);
  const [lyricParasPosition, setLyricParasPosition] = useState(0);
  const [activeLyric, setActiveLyric] = useState(0);

  return (
    <div className={styles.footerPlayer}>
      <div className={styles.lyric}>
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
                <div key={i} className={lineClassName}>
                  <p>{lyric.lyric}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.footerPlayer_wrapper}>
        <Metadata />
        <Audio
          lyrics={lyrics}
          setCurrentTime={setCurrentTime}
          setLyricParasPosition={setLyricParasPosition}
          setActiveLyric={setActiveLyric}
        />
        <Actions />
      </div>
    </div>
  );
}
