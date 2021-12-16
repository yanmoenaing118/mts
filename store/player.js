import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "player",
  initialState: {
    showPlayer: false,
    src: "",
    title: "",
    artists: "",
    cover_img: "",
    lyrics: [],
    original_lyrics: [], // to keep the lyric
    translations: null,
    trackId: "",
  },
  reducers: {
    openPlayer: (state, action) => {
      state.showPlayer = true;
      const { src, title, artists, cover_img, lyrics, translations, trackId } =
        action.payload;
      state.src = src;
      state.title = title;
      state.artists = artists;
      state.cover_img = cover_img;
      state.lyrics = lyrics;
      state.translations = translations;
      state.original_lyrics = lyrics;
      state.trackId = trackId;
    },
    closePlayer: (state) => {
      state.showPlayer = false;
    },
    changePlayerSource: (state, action) => {
      const { src, title, artists, cover_img, lyrics, translations, trackId } =
        action.payload;
      state.src = src;
      state.title = title;
      state.artists = artists;
      state.cover_img = cover_img;
      state.lyrics = lyrics;
      state.translations = translations;
      state.original_lyrics = lyrics;
      state.trackId = trackId;
    },
    setLyric: (state, action) => {
      // switch between original lyrics and translations
      const { lang } = action.payload;
      if (lang === "lyric") {
        state.lyrics = state.original_lyrics;
      } else {
        state.lyrics = state.translations[lang];
      }
    },
  },
});

export const { openPlayer, closePlayer, changePlayerSource, setLyric } =
  playerSlice.actions;

export default playerSlice.reducer;
