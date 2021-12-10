import { createSlice } from "@reduxjs/toolkit";

const translationEditorSlice = createSlice({
  name: "editor",
  initialState: {
    show: false,
  },
  reducers: {
    openEditor: (state) => {
      state.show = true;
    },
    closeEditor: (state) => {
      state.show = false;
    },
  },
});

export const { openEditor, closeEditor } = translationEditorSlice.actions;

export default translationEditorSlice.reducer;
