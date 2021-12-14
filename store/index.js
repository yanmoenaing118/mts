import { createSlice, configureStore } from "@reduxjs/toolkit";
import editorReducer from "./editor";
import settingReducer from "./setting";
import unsplashReducer from "./unsplash";
import songsReducer from "./songs";
import playerReducer from "./player";

export default configureStore({
  reducer: {
    songs: songsReducer,
    player: playerReducer,
    editor: editorReducer,
    setting: settingReducer,
    theme: unsplashReducer,
  },
});
