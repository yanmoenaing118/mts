import { Link } from "react-router-dom";
import Image from "next/image";
import {
  FcHome,
  FcOpenedFolder,
  FcAssistant,
  FcMusic,
  FcSettings,
} from "react-icons/fc";
import styles from "./../../styles/Dashboard.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { openSetting } from "../../store/setting";

export default function Sidebar() {
  // const isSettingOpen = useSelector((state) => state.setting.show);
  const dispatch = useDispatch();
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
            <Link to="/dashboard">
              <div>
                <FcHome size={35} />
              </div>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/explore">
              <div>
                <FcOpenedFolder size={35} />
              </div>
              <span>Explore</span>
            </Link>
          </li>
          <li>
            <Link to="/artists">
              <div>
                <FcAssistant size={35} />
              </div>
              <span>Artists</span>
            </Link>
          </li>
          <li>
            <Link to="/drama-osts">
              <div>
                <FcMusic size={35} />
              </div>
              <span>Drama OST</span>
            </Link>
          </li>
        </ul>
      </nav>

      <div className={styles.settings}>
        <button
          className={styles.settings_togglebtn}
          onClick={() => {
            console.log("setting");
            dispatch(openSetting());
          }}
        >
          <FcSettings size={40} color="#fff" />
          <span>Settings</span>
        </button>
      </div>
    </div>
  );
}
