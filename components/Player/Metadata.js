import styles from "./../../styles/Player.module.scss";
import Image from "next/image";
export default function Metadata() {
  return (
    <div className={styles.metadata}>
      <div className={styles.metadata_cover}>
        <Image
          src="https://resources.tidal.com/images/e2b7e826/247a/4528/94ca/08ed26ae8a1f/1280x1280.jpg"
          width={80}
          height={80}
        />
      </div>
      <div className={styles.metadata_info}>
        <h3>Monster</h3>
        <p>Red Velvet - Iren & Seulgi</p>
      </div>
    </div>
  );
}
