import React from "react";

function Counter({value, setValue}) {


  return (
    <>
      <button
        type="button"
        className="minusser"
        onClick={() => {if (value > 0) {setValue(value - 1);} } }
      >
        -
      </button>

        {value}

      <button
        type="button"
        className="plusser"
        onClick={() => setValue(value + 1)}
      >
        +
      </button>

    </>
  );
}

export default Counter;
