import { useState } from "react";
import classes from "./Counter.m.scss";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>{counter}</h1>
      <button
        className={classes.btn}
        onClick={() => setCounter((cur) => cur + 1)}
      >
        Add
      </button>
    </>
  );
};

export default Counter;
