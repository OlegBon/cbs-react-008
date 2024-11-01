import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
};

export const noteSlice = createSlice({
  name: "notesValue",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload);
    },
  },
});

export const { addNote } = noteSlice.actions;
export const selectNotes = (state) => state.notesValue.notes;

export default noteSlice.reducer;
