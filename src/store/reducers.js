import { createSlice } from "@reduxjs/toolkit";

export const MovieDataReducer = createSlice({
  name: "moviedata",
  initialState: {
    value: [],
  },
  reducers: {
    ShowDetails: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { ShowDetails } = MovieDataReducer.actions;
export default MovieDataReducer.reducer;
