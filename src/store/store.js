import { configureStore } from "@reduxjs/toolkit";

import MovieAppReducer from "./reducers";

export default configureStore({
  reducer: {
    MovieApp: MovieAppReducer,
  },
});
