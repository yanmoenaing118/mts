import styles from "./../../styles/Player.module.scss";
import Image from "next/image";
import { FaStepForward, FaStepBackward, FaPlay } from "react-icons/fa";

export default function Player() {
  return (
    <div className={styles.footerPlayer}>
      <div className={styles.footerPlayer_wrapper}>
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
        <div className={styles.player}>
          <audio
            src="https://myplaylist.vercel.app/static/media/for_one_person.20cab8c7.mp3"
            controls
            style={{ display: "none" }}
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
              <span>0:00</span>
              <div className={styles.player_progressbar}></div>
              <span>3:31</span>
            </div>
          </div>
        </div>
        <div className={styles.actions}>actions</div>
      </div>
    </div>
  );
}
