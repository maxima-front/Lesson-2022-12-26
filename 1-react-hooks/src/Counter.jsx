import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleCounter = (operation = "add") => {
    if (operation === "add") {
      // return setCounter(counter + 1);
      return setCounter(val => val + 1);
    }

    return setCounter(counter - 1);
  };

  return (
    <p>
      Counter: {counter} <br />
      <button
        onClick={(event) => {
          console.log(event);
          handleCounter("add");
        }}
      >
        + Add
      </button>
      <button onClick={() => handleCounter("subtract")}>- Subtract</button>
    </p>
  );
};
export default Counter;
