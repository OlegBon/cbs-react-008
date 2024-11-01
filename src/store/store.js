import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counterSlice";
import noteReducer from "./slice/noteSlice";

export const store = configureStore({
  reducer: {
    counterValue: counterReducer,
    notesValue: noteReducer,
  },
});
