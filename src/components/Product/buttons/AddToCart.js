import React from "react";

export default function AddToCart({ handleSubmit, unavailible }) {
  return (
    <button
      onClick={handleSubmit}
      disabled={unavailible}
      className={"button btn-add-to-cart"}
    >
      add to cart
    </button>
  );
}
