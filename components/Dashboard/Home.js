import Tracks from "./Tracks";
import { useSelector } from "react-redux";

export default function Home() {
  let tracks = useSelector((state) => state.songs.songs);
  tracks = tracks.map((song) => {
    return {
      id: song.id,
      title: song.title,
      artists: song.artists,
      audio_src: song.src,
      cover_img: song.cover_img,
      lyrics: song.lyrics,
    };
  });

  return (
    <>
      <h2>Home</h2>
      <Tracks tracks={tracks} />
    </>
  );
}
