import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUnsplashPhotos = createAsyncThunk("fetchPhotos", async () => {
  const response = await fetch(
    "https://api.unsplash.com/search/photos/?client_id=7FMuZy1m-Kv9LgXjaN-Lt3NM44gpQlJWjKqutnUZlJM&?page=1&query=forest&per_page=20"
  );
  let data = await response.json();

  data = data.results.map((result) => {
    return {
      urls: result.urls,
    };
  });
  console.log(data);
  return data;
});

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    photos: [],
    status: "idle",
    error: null,
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUnsplashPhotos.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUnsplashPhotos.fulfilled, (state, action) => {
        console.log(action);
        state.status = "success";
        state.photos = action.payload;
      })
      .addCase(fetchUnsplashPhotos.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export default themeSlice.reducer;
