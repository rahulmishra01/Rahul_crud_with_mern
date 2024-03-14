import { configureStore } from "@reduxjs/toolkit";
import { reducerAll } from "./reducer";
const store = configureStore({
  reducer: {
    data: reducerAll,
  },
});
export default store;
