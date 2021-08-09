import React from "react";

const convertToCurrency = (price) => {
  return `£ ${price.toFixed(2)}`;
};

export default function Price({ price }) {
  return <span class={"price"}>{convertToCurrency(price)}</span>;
}
