import { useState } from "react";

const State2 = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      {counter}
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default State2;
