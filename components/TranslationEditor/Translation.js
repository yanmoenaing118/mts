import styles from "./../../styles/TranslationEditor.module.scss";

export default function Translation() {
  return (
    <div className={styles.translation}>
      <form className={styles.translation_textbox}>
        <textarea></textarea>
      </form>
      <div className={styles.translation_timerange}>
        <div className={styles.translation_timerange_input}>
          <input
            type="number"
            className={styles.translation_timerange_input_min}
            placeholder="00"
            max={60}
            min={0}
          />

          <input
            type="number"
            className={styles.translation_timerange_input_sec}
            placeholder="00"
            max={60}
            min={0}
          />
        </div>
        <div className={styles.translation_timerange_input}>
          <input
            type="number"
            className={styles.translation_timerange_input_min}
            placeholder="00"
            max={60}
            min={0}
          />

          <input
            type="number"
            className={styles.translation_timerange_input_sec}
            placeholder="00"
            max={60}
            min={0}
          />
        </div>
      </div>
    </div>
  );
}
