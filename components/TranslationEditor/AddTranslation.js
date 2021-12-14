import { useState } from "react";
import styles from "./../../styles/TranslationEditor.module.scss";
import { nanoid } from "@reduxjs/toolkit";

export default function AddTranslation({ setLyric }) {
  const [startMin, setStartMin] = useState(0);
  const [startSec, setStartSec] = useState(0);
  const [endMin, setEndMin] = useState(0);
  const [endSec, setEndSec] = useState(0);
  const [translatedText, setTranslatedText] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("start", startMin, startSec);
    console.log("end", endMin, endSec);
    console.log(translatedText);
    const tran = {
      id: nanoid(),
      lyric: translatedText,
      starttime: `00:${startMin}:${startSec}`,
      endtime: `00:${endMin}:${endSec}`,
    };

    setLyric(tran);
    setStartMin(endMin);
    setStartSec(endSec);
  };
  return (
    <div className={styles.addTranslation}>
      <form onSubmit={onSubmitHandler}>
        <div className={styles.addTranslation_text}>
          <p>Add translation</p>
          <input
            type="text"
            className={styles.textInput}
            value={translatedText}
            onChange={(e) => setTranslatedText(e.target.value)}
          />
        </div>
        <div className={styles.addTranslation_times}>
          <div>
            <p>start time</p>
            <input
              type="number"
              min={0}
              max={4}
              placeholder="min"
              value={startMin}
              onChange={(e) => setStartMin(e.target.value)}
            />
            <input
              type="number"
              min={0}
              max={60}
              placeholder="sec"
              value={startSec}
              onChange={(e) => setStartSec(e.target.value)}
            />
          </div>
          <div>
            <div>
              <p>end time</p>
              <input
                type="number"
                min={0}
                max={4}
                placeholder="min"
                value={endMin}
                onChange={(e) => setEndMin(e.target.value)}
              />
              <input
                type="number"
                min={0}
                max={60}
                placeholder="sec"
                value={endSec}
                onChange={(e) => setEndSec(e.target.value)}
              />
            </div>
          </div>
          <div>
            <input type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
}
