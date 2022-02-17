import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  decrement,
  decrementByValue,
  increment,
  incrementByValue,
} from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [value, setValue] = useState("");
  return (
    <div>
      <h1>Redux</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <h1>{count}</h1>
      <button onClick={() => dispatch(decrement())}>-</button>
      <br />
      <br />
      <br />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />{" "}
      <br />
      <button onClick={() => dispatch(incrementByValue(Number(value)))}>
        increment By value
      </button>
      <br />
      <button onClick={() => dispatch(decrementByValue(Number(value)))}>
        decrement By value
      </button>
    </div>
  );
};

export default Counter;
