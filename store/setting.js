import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const settingSlice = createSlice({
  name: "setting",
  initialState: {
    show: false,
    bgTheme:
      "https://i.pinimg.com/originals/ee/47/dc/ee47dc6689af806b8ea2022c2da5cde3.jpg",
  },
  reducers: {
    openSetting: (state) => {
      state.show = true;
    },
    closeSetting: (state) => {
      state.show = false;
    },
    changeTheme: (state, { payload }) => {
      state.bgTheme = payload.theme_src;
    },
  },
});

export const { openSetting, closeSetting, changeTheme } = settingSlice.actions;

export default settingSlice.reducer;
