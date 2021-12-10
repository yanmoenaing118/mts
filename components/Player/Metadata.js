import styles from "./../../styles/Player.module.scss";
import Image from "next/image";
import { useSelector } from "react-redux";
export default function Metadata() {
  const coverImg = useSelector((state) => state.player.cover_img);
  const artists = useSelector((state) => state.player.artists);
  const title = useSelector((state) => state.player.title);
  return (
    <div className={styles.metadata}>
      <div className={styles.metadata_cover}>
        <Image src={coverImg} width={80} height={80} />
      </div>
      <div className={styles.metadata_info}>
        <h3>{title}</h3>
        <p>{artists}</p>
      </div>
    </div>
  );
}
