import Container from "../Layout/Layout";
import styles from "./../../styles/Hero.module.scss";
import btn_styles from "./../../styles/Button.module.scss";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <Container>
        <div className={styles.hero_wrapper}>
          <h1>We bring you the best translations of your favorite songs</h1>
          <div>
            <p>
              We listen to music everyday. Not everyone of us actually
              understand the lyric.
              <span> So we make you understand the lyric.</span>
            </p>
            <button
              type="button"
              className={`${btn_styles.btn} ${btn_styles.btn_primary}`}
            >
              request a song
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
