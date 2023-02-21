import { createSlice } from "@reduxjs/toolkit";

export const MovieDataReducer = createSlice({
  name: "moviedata",
  initialState: {
    value: [],
    SeatValue: [],
    EmailId: "arunvicky1031@gmail.com",
  },
  reducers: {
    ShowDetails: (state, action) => {
      state.value = action.payload;
    },
    UpdateSeat: (state, action) => {
      state.SeatValue = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { ShowDetails, UpdateSeat } = MovieDataReducer.actions;
export default MovieDataReducer.reducer;
