import { useEffect, useState } from "react";
import styles from "./../../styles/TranslationEditor.module.scss";
import { nanoid } from "@reduxjs/toolkit";
import StartMinInput from "./AddTranslationComponents/StartMinInput";
import StartSecInput from "./AddTranslationComponents/StartSecInput";
import EndMinInput from "./AddTranslationComponents/EndMinInput";
import EndSecInput from "./AddTranslationComponents/EndSecInput";
import TextInput from "./AddTranslationComponents/TextInput";
import { useDispatch } from "react-redux";
import { submitALyric } from "../../store/songs";

export default function AddTranslation() {
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(submitALyric());
  };
  return (
    <div className={styles.addTranslation}>
      <form onSubmit={onSubmitHandler}>
        <div className={styles.addTranslation_text}>
          <p>Add translation</p>
          <TextInput />
        </div>
        <div className={styles.addTranslation_times}>
          <div>
            <p>start time</p>
            <StartMinInput />

            <StartSecInput />
          </div>
          <div>
            <div>
              <p>end time</p>
              <EndMinInput />
              <EndSecInput />
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
