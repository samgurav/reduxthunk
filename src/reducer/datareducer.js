import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const getData = createAsyncThunk("photos/getData", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  const formatterResponse = await response.json();
  return formatterResponse;
});
export const datareducer = createSlice({
  name: "gallery",
  initialState: {
    photos: [],
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      state.photos = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getData.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const photos = (state) => state.gallery.photos;

export default datareducer.reducer;
