import styles from "./../../styles/Player.module.scss";

import Metadata from "./Metadata";
import Audio from "./Audio";
import Actions from "./Actions";
import { useState } from "react";
import Lyric from "./Lyric";

const lyrics = [
  {
    lyric: "将军夫人",
    translations: {
      english: "The wind speaks with your tone",
    },
    starttime: "00:18.294",
    endtime: "00:21.599",
  },
  {
    lyric: "风用你的语气说话",
    starttime: "00:21.673",
    endtime: "00:24.678",
    translations: {
      english: "Talking about the rain falling in the rain",
    },
  },
  {
    lyric: "谈雨落下雨",
    starttime: "00:25.825",
    endtime: "00:28.625",
    translations: {
      english: "I pause in the dream",
    },
  },
  {
    lyric: "我在梦中停留",
    starttime: "00:29.141",
    endtime: "00:31.930",
    translations: {
      english: "Counting the years of memory",
    },
  },
  {
    lyric: "数着记忆的岁月",
    starttime: "00:32.309",
    endtime: "00:35.154",
    translations: {
      english: "Waiting for the passionate love",
    },
  },
  {
    lyric: "等待热情的爱",
    starttime: "00:35.554",
    endtime: "00:39.180",
    translations: {
      english: "I'd trade a lifetime of prosperity for a life of suffering",
    },
  },
  {
    lyric: "我愿意用一生的繁荣换取痛苦的一生",
    starttime: "00:39.440",
    endtime: "00:46.144",
    translations: {
      english: "Drink a bottle of wine and seat up the story",
    },
  },
  {
    lyric: "喝一瓶酒，坐上故事",
    starttime: "00:46.792",
    endtime: "00:50.505",
    translations: {
      english: "Love is the residual warmth of the world",
    },
  },
  {
    lyric: "爱是世间残留的温暖",
    starttime: "00:50.663",
    endtime: "00:54.173",
    translations: {
      english: "The flowers bloom and fall leaving traces behind",
    },
  },
  {
    lyric: "花开落落留下痕迹",
    starttime: "00:54.352",
    endtime: "00:57.216",
    translations: {
      english: "Keep the innocence in the passing years",
    },
  },
  {
    lyric: "留住岁月流转的纯真",
    starttime: "00:57.216",
    endtime: "01:00.495",
    translations: {
      english: "Only for you",
    },
  },
  {
    lyric: "只为你",
    starttime: "01:01.537",
    endtime: "01:05.058",
    translations: {
      english: "Love is the first spring in the wilderness",
    },
  },
  {
    lyric: "爱是旷野的第一个春天",
    starttime: "01:05.437",
    endtime: "01:09.010",
    translations: {
      english: "Quietly open my heart",
    },
  },
  {
    lyric: "悄悄打开我的心扉",
    starttime: "01:09.437",
    endtime: "01:11.369",
    translations: {
      english: "No matter what happens",
    },
  },
  {
    lyric: "无论发生了什么",
    starttime: "01:11.369",
    endtime: "01:15.306",
    translations: {
      english: "I'll always be loyal to you",
    },
  },
  {
    lyric: "我永远忠于你",
    starttime: "01:35.683",
    endtime: "01:38.848",
    translations: {
      english: "The palm print in the hand",
    },
  },
  {
    lyric: "手上的掌纹",
    starttime: "01:38.848",
    endtime: "01:42.784",
    translations: {
      english: "It messes with the thoughts",
    },
  },
  {
    lyric: "它扰乱了思绪",
    starttime: "01:43.320",
    endtime: "01:46.360",
    translations: {
      english: "The endless gaze",
    },
  },
  {
    lyric: "无尽的凝视",
    starttime: "01:46.444",
    endtime: "01:49.349",
    translations: {
      english: "In every morning and evening",
    },
  },
  {
    lyric: "在每个早晚",
    starttime: "01:49.770",
    endtime: "01:53.000",
    translations: {
      english: "Finding peace amidst the chaos",
    },
  },
  {
    lyric: "在混乱中寻找和平",
    starttime: "01:53.523",
    endtime: "01:56.961",
    translations: {
      english: "Happiness and sadness, even If it's only for a moment",
    },
  },
  {
    lyric: "快乐与悲伤，哪怕只是一瞬间",
    starttime: "01:57.287",
    endtime: "02:03.592",
    translations: {
      english: "Leave it to the moon and tell the story",
    },
  },
  {
    lyric: "交给月亮去讲故事",
    starttime: "02:04.536",
    endtime: "02:07.831",
    translations: {
      english: "Love is the residual warmth of the world",
    },
  },
  {
    lyric: "爱是世间残留的温暖",
    starttime: "02:08.326",
    endtime: "02:11.631",
    translations: {
      english: "The flowers bloom and fall leaving trace behind",
    },
  },
  {
    lyric: "花开落落留下痕迹",
    starttime: "02:11.631",
    endtime: "02:14.636",
    translations: {
      english: "Keep the innocence in the passing years",
    },
  },
  {
    lyric: "留住岁月流转的纯真",
    starttime: "02:14.636",
    endtime: "02:17.798",
    translations: {
      english: "Only for you",
    },
  },
  {
    lyric: "只为你",
    starttime: "02:19.305",
    endtime: "02:22.669",
    translations: {
      english: "Love is the first spring in the wilderness",
    },
  },
  {
    lyric: "爱是旷野的第一个春天",
    starttime: "02:22.858",
    endtime: "02:26.599",
    translations: {
      english: "Quietly open my heart",
    },
  },
  {
    lyric: "悄悄打开我的心扉",
    starttime: "02:26.915",
    endtime: "02:28.636",
    translations: {
      english: "No matter what happens",
    },
  },
  {
    lyric: "无论发生了什么",
    starttime: "02:28.909",
    endtime: "02:33.503",
    translations: {
      english: "I'll always be loyal to you",
    },
  },
  {
    lyric: "我永远忠于你",
    starttime: "02:34.292",
    endtime: "02:37.332",
    translations: {
      english: "Love is the residual warmth of the world",
    },
  },
  {
    lyric: "爱是世间残留的温暖",
    starttime: "02:37.669",
    endtime: "02:40.974",
    translations: {
      english: "The flowers bloom and fall leaving traces behind",
    },
  },
  {
    lyric: "花开落落留下痕迹",
    starttime: "02:41.258",
    endtime: "02:44.369",
    translations: {
      english: "Keep the innocence in the passing years",
    },
  },
  {
    lyric: "留住岁月流转的纯真",
    starttime: "02:44.369",
    endtime: ":02:48.221",
    translations: {
      english: "Only for you",
    },
  },
  {
    lyric: "只为你",
    starttime: "02:48.737",
    endtime: "02:52.113",
    translations: {
      english: "Love is the first spring in the wilderness",
    },
  },
  {
    lyric: "爱是旷野的第一个春天",
    starttime: "02:52.439",
    endtime: "02:55.863",
    translations: {
      english: "Quietly open my heart",
    },
  },
  {
    lyric: "悄悄打开我的心扉",
    starttime: "02:56.463",
    endtime: "02:58.472",
    translations: {
      english: "No matter what happens",
    },
  },
  {
    lyric: "无论发生了什么 我永远忠于你 ",
    starttime: "02:58.472",
    endtime: "03:02.187",
    translations: {
      english: "I'll always be loyal to you",
    },
  },
];

export default function Player() {
  const [currentTime, setCurrentTime] = useState(0);
  const [lyricParasPosition, setLyricParasPosition] = useState(0);
  const [activeLyric, setActiveLyric] = useState(0);
  const [showLyric, setShowLyric] = useState(false);

  return (
    <div className={styles.footerPlayer}>
      <Lyric
        lyricParasPosition={lyricParasPosition}
        activeLyric={activeLyric}
        showLyric={showLyric}
        lyrics={lyrics}
      />

      <div className={styles.footerPlayer_wrapper}>
        <Metadata />
        <Audio
          lyrics={lyrics}
          setCurrentTime={setCurrentTime}
          setLyricParasPosition={setLyricParasPosition}
          setActiveLyric={setActiveLyric}
        />
        <Actions setShowLyric={setShowLyric} showLyric={showLyric} />
      </div>
    </div>
  );
}
