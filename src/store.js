import { configureStore } from "@reduxjs/toolkit";
import datareducer from "./reducer/datareducer";

const store = configureStore({
  reducer: {
    gallery: datareducer,
  },
});

export default store;
