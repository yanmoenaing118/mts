import styles from "./../../styles/Dashboard.module.scss";
import { GrCirclePlay } from "react-icons/gr";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { openPlayer, changePlayerSource } from "./../../store/player";

function TrackItem({
  title,
  artists,
  cover_img,
  audio_src,
  lyrics,
  translations,
  original_lyrics,
  id,
}) {
  const isPlayerOpen = useSelector((state) => state.player.showPlayer);
  const dispatch = useDispatch();
  const playTrackHandler = (e) => {
    if (!isPlayerOpen) {
      dispatch(
        openPlayer({
          src: audio_src,
          title: title,
          artists: artists,
          cover_img: cover_img,
          lyrics: lyrics,
          translations: translations,
          original_lyric: original_lyrics,
          trackId: id,
        })
      );
      return;
    }
    dispatch(
      changePlayerSource({
        src: audio_src,
        title: title,
        artists: artists,
        cover_img: cover_img,
        lyrics: lyrics,
        translations: translations,
        original_lyrics: original_lyrics,
        trackId: id,
      })
    );
  };
  return (
    <li>
      <div className={styles.tracks_item}>
        <div className={styles.tracks_item_cover}>
          <Image src={cover_img} layout="fill" objectFit="cover" />
          <div
            className={styles.tracks_item_cover_play}
            onClick={playTrackHandler}
          >
            <GrCirclePlay size={30} fill="#fff" />
          </div>
        </div>
        <div className={styles.tracks_item_info}>
          <h3>{title}</h3>
          <div>{artists}</div>
        </div>
      </div>
    </li>
  );
}

export default function Tracks({ tracks }) {
  return (
    <div className={styles.tracks}>
      <ul className={styles.tracks_list}>
        {tracks.map((track) => {
          return <TrackItem key={track.id} {...track} />;
        })}
      </ul>
    </div>
  );
}
