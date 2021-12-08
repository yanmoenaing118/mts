import { BiSearch } from "react-icons/bi";

import styles from "./../../styles/Dashboard.module.scss";
import Sidebar from "./Sidebar";
import Tracks from "./Tracks";

const songs = [];

export default function Dashboard(pros) {
  return (
    <div className={styles.dashboard}>
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
          <div className={styles.dashboard_main_home}>
            <h2>Home</h2>
            <Tracks />
          </div>
        </div>
      </div>
    </div>
  );
}