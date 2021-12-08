import styles from "./../../styles/Dashboard.module.scss";
import { GrCirclePlay } from "react-icons/gr";
import Image from "next/image";

const tracks = [
  {
    id: 1,
    title: "Ddu-Du Ddu-Du",
    artist: "Blackpink",
    cover_src:
      "https://resources.tidal.com/images/e2b7e826/247a/4528/94ca/08ed26ae8a1f/1280x1280.jpg",
  },
  {
    id: 2,
    title: "Monster",
    artist: "Red Velvet - Irene & Seulgi",
    cover_src:
      "https://resources.tidal.com/images/527f688b/1968/4a05/aa4f/df31ee00d209/1280x1280.jpg",
  },
  // {
  //   id: 3,
  //   title: "Monster",
  //   artist: "Red Velvet - Irene & Seulgi",
  //   cover_src:
  //     "https://resources.tidal.com/images/527f688b/1968/4a05/aa4f/df31ee00d209/1280x1280.jpg",
  // },
  // {
  //   id: 4,
  //   title: "Monster",
  //   artist: "Red Velvet - Irene & Seulgi",
  //   cover_src:
  //     "https://resources.tidal.com/images/527f688b/1968/4a05/aa4f/df31ee00d209/1280x1280.jpg",
  // },
  // {
  //   id: 5,
  //   title: "Monster",
  //   artist: "Red Velvet - Irene & Seulgi",
  //   cover_src:
  //     "https://resources.tidal.com/images/527f688b/1968/4a05/aa4f/df31ee00d209/1280x1280.jpg",
  // },
  // {
  //   id: 6,
  //   title: "Monster",
  //   artist: "Red Velvet - Irene & Seulgi",
  //   cover_src:
  //     "https://resources.tidal.com/images/527f688b/1968/4a05/aa4f/df31ee00d209/1280x1280.jpg",
  // },
  // {
  //   id: 7,
  //   title: "Monster",
  //   artist: "Red Velvet - Irene & Seulgi",
  //   cover_src:
  //     "https://resources.tidal.com/images/527f688b/1968/4a05/aa4f/df31ee00d209/1280x1280.jpg",
  // },
  // {
  //   id: 8,
  //   title: "Monster",
  //   artist: "Red Velvet - Irene & Seulgi",
  //   cover_src:
  //     "https://resources.tidal.com/images/527f688b/1968/4a05/aa4f/df31ee00d209/1280x1280.jpg",
  // },
  // {
  //   id: 9,
  //   title: "Monster",
  //   artist: "Red Velvet - Irene & Seulgi",
  //   cover_src:
  //     "https://resources.tidal.com/images/527f688b/1968/4a05/aa4f/df31ee00d209/1280x1280.jpg",
  // },
  // {
  //   id: 10,
  //   title: "Monster",
  //   artist: "Red Velvet - Irene & Seulgi",
  //   cover_src:
  //     "https://resources.tidal.com/images/527f688b/1968/4a05/aa4f/df31ee00d209/1280x1280.jpg",
  // },
];

function TrackItem({ title, artist, cover_src }) {
  return (
    <li>
      <div className={styles.tracks_item}>
        <div className={styles.tracks_item_cover}>
          <Image src={cover_src} width={48} height={48} />
          <div className={styles.tracks_item_cover_play}>
            <GrCirclePlay size={30} fill="#fff" />
          </div>
        </div>
        <div className={styles.tracks_item_info}>
          <h3>{title}</h3>
          <div>{artist}</div>
        </div>
      </div>
    </li>
  );
}

export default function Tracks() {
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
