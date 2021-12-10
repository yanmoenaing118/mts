import { BiSearch } from "react-icons/bi";
import { useSelector } from "react-redux";

import styles from "./../../styles/Dashboard.module.scss";
import Sidebar from "./Sidebar";
import Tracks from "./Tracks";

const songs = [];

export default function Dashboard(props) {
  const themeBg = useSelector((state) => state.setting.bgTheme);
  console.log(themeBg);
  return (
    <div
      className={styles.dashboard}
      style={{
        backgroundImage: `linear-gradient(to bottom,rgba(0,0,0, 0.8),rgba(0,0,0, 0.6)),url("${themeBg}")`,
      }}
    >
      <div className={styles.dashboard_wrapper}>
        <Sidebar />
        <div className={styles.dashboard_main}>
          <div className={styles.search}>
            <form>
              <div>
                <span>
                  <BiSearch size={18} />
                </span>
                <input type="text" placeholder="Search" />
              </div>
            </form>
          </div>
          <div className={styles.dashboard_main}>{props.children}</div>
        </div>
      </div>
    </div>
  );
}
