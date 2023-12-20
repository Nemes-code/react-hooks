import React, { useState } from "react";
import { Link } from "react-router-dom";

const StateTutorial = () => {
  const [inputValue, setInputValue] = useState("Pedro");

  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <input placeholder="enter something..." onChange={onChange} />
      {inputValue}
      <div>
        <Link to="/stat2" className="btn btn-primary">
          Example 2
        </Link>
      </div>
    </div>
  );
};

export default StateTutorial;
