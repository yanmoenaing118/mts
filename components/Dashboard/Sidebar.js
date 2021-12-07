import Link from "next/link";
import Image from "next/image";
import { FcHome, FcOpenedFolder, FcAssistant, FcMusic } from "react-icons/fc";
import styles from "./../../styles/Dashboard.module.scss";

export default function Sidebar() {
  return (
    <div className={styles.dashboard_sidebar}>
      <div className={styles.dashboard_user}>
        <div className={styles.dashboard_user_img}>
          <Image src="/assets/userimg.jpeg" width={66} height={66} />
        </div>
        <div className={styles.dashboard_user_name}>Yan Moe Naing</div>
      </div>
      <nav className={styles.dashboard_navlinks}>
        <ul>
          <li>
            <Link href="/dashboard">
              <a>
                <div>
                  <FcHome size={35} />
                </div>
                <span>Home</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/#">
              <a>
                <div>
                  <FcOpenedFolder size={35} />
                </div>
                <span>Explore</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/#">
              <a>
                <div>
                  <FcAssistant size={35} />
                </div>
                <span>Artists</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/#">
              <a>
                <div>
                  <FcMusic size={35} />
                </div>
                <span>Drama OST</span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
