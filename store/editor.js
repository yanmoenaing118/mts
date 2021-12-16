import { createSlice, nanoid } from "@reduxjs/toolkit";

const translationEditorSlice = createSlice({
  name: "editor",

  initialState: {
    show: false,
    language: "",
    input: {
      startMin: "00",
      startSec: "00",
      endMin: "00",
      endSec: "00",
    },
    inputText: "",
    lyrics: [],
  },
  reducers: {
    openEditor: (state) => {
      state.show = true;
    },
    closeEditor: (state) => {
      state.show = false;
    },
    setInput: (state, action) => {
      const { inputType, value } = action.payload;
      switch (inputType) {
        case "startMin":
          state.input.startMin = value;
          break;
        case "endMin":
          state.input.endMin = value;
          break;
        case "startSec":
          state.input.startSec = value;
          break;
        case "endSec":
          state.input.endSec = value;
          break;
        default:
          return;
      }
    },
    setInputText: (state, action) => {
      state.inputText = action.payload;
    },
    submitALyric: (state) => {
      const lyric = {
        id: nanoid(),
        lyric: state.inputText,
        starttime: `${state.input.startMin}:${state.input.startSec}.00`,
        endtime: `${state.input.endMin}:${state.input.endSec}.00`,
      };
      state.input.startMin = state.input.endMin;
      state.input.startSec = state.input.endSec;
      state.lyrics.push(lyric);
    },
    saveTranslation: (state) => {
      return state;
    },
  },
});

export const {
  openEditor,
  closeEditor,
  setInput,
  setInputText,
  submitALyric,
  saveTranslation,
} = translationEditorSlice.actions;

export default translationEditorSlice.reducer;
