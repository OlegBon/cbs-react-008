import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counterValue",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reload: (state) => {
      state.count = 0;
    },
    addTwo: (state) => {
      state.count += 2;
    },
    addTen: (state) => {
      state.count += 10;
    },
    multiplyByTwo: (state) => {
      state.count *= 2;
    },
    multiplyByTen: (state) => {
      state.count *= 10;
    },
    addValue: (state, action) => {
      state.count += +action.payload;
    },
  },
});

export const {
  addValue,
  increment,
  decrement,
  reload,
  addTwo,
  addTen,
  multiplyByTwo,
  multiplyByTen,
} = counterSlice.actions;
export const selectCount = (state) => state.counterValue.count;

export default counterSlice.reducer;
