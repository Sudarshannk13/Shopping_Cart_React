import React from "react";

export default function Quantity({
  handleClick,
  quantity,
  unavailible,
  stock,
}) {
  return (
    <div className={"btn_container"}>
      <button
        disabled={unavailible || quantity === 0}
        onClick={() => handleClick(-1)}
        className={"button btn-quantity--minus"}
      >
        -
      </button>
      <span className={"quantity"}>{quantity}</span>
      <button
        disabled={unavailible || quantity === stock}
        className={" button btn-quantity--plus"}
        onClick={() => handleClick(1)}
      >
        +
      </button>
    </div>
  );
}
