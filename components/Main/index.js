import Section from "../Section";
import btn_styles from "./../../styles/Button.module.scss";
import styles from "./../../styles/Main.module.scss";

export default function Main(props) {
  return (
    <main>
      <Section background="#fff">
        <div className={`${styles.main_box}`}>
          <div className={`${styles.main_box__left}`}>
            <div className={styles.main_textbox}>
              <h1>You love languages.</h1>
              <p>
                We have millions of songs for you to translate into your
                favorite languages.
              </p>
              <button
                type="button"
                className={`${btn_styles.btn} ${btn_styles.btn_primary}`}
              >
                Become a translator
              </button>
            </div>
          </div>
          <div className={`${styles.main_box__right}`}>
            <img
              className={styles.main_box__img}
              src="assets/adventure_re_ncqp.svg"
              alt="Become a translator"
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className={`${styles.main_box}`}>
          <div className={`${styles.main_box__left}`}>
            <img
              className={styles.main_box__img}
              src="assets/team_spirit_re_yl1v.svg"
              alt="About us"
            />
          </div>
          <div className={`${styles.main_box__right}`}>
            <div className={styles.main_textbox}>
              <h1>About Our Service</h1>
              <p>
                We have millions of songs translated into various languages. You
                can request the translation of any song sung in your favorite
                language.
              </p>
              <button
                type="button"
                className={`${btn_styles.btn} ${btn_styles.btn_primary}`}
              >
                Request lyric translation
              </button>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}

{
  /* <h1>You love languages</h1>
            <div>
              <p>
                
              </p>
              
            </div> */
}
