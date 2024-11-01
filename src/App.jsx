import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  addTen,
  addTwo,
  addValue,
  decrement,
  increment,
  multiplyByTen,
  multiplyByTwo,
  reload,
  selectCount,
} from "./store/slice/counterSlice";
import { useState } from "react";
import { addNote, selectNotes } from "./store/slice/noteSlice";

function App() {
  const [value, setValue] = useState("");
  const [note, setNote] = useState("");

  const count = useSelector(selectCount);
  const notes = useSelector(selectNotes);
  const dispatch = useDispatch();

  const inc = () => {
    dispatch(increment());
  };

  const dec = () => {
    dispatch(decrement());
  };

  return (
    <>
      <h2>Task 2</h2>
      <h1>{count}</h1>
      <button onClick={inc}>Inc +</button>
      <button onClick={dec}>Dec -</button>
      <button onClick={() => dispatch(reload())}>Reset</button>
      <br />
      <button onClick={() => dispatch(addTwo())}>Inc +2</button>
      <button onClick={() => dispatch(addTen())}>Inc +10</button>
      <br />
      <button onClick={() => dispatch(multiplyByTwo())}>Mult x2</button>
      <button onClick={() => dispatch(multiplyByTen())}>Mult x10</button>
      <br />
      <button onClick={() => dispatch(addValue(value))}>Add value</button>
      <br />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <hr />
      <h2>Task 3</h2>
      <button onClick={() => dispatch(addNote(note))}>Add note</button>
      <br />
      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <ul>
        {notes.map((el, idx) => (
          <li key={idx}>{el}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
