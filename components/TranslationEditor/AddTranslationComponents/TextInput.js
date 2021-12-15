import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInputText } from "./../../../store/songs";

import styles from "./../../../styles/TranslationEditor.module.scss";

export default function TextInput() {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.songs.inputText);
  // const [tem, setTemp] = useState("");

  return (
    <input
      type="text"
      className={styles.textInput}
      value={text}
      onChange={(e) => {
        // setTemp(e.target.value);
        dispatch(setInputText(e.target.value));
      }}
    />
  );
}
