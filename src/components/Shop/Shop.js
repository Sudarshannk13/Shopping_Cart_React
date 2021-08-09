import React from "react";
import Product from "../Product";

export default function Shop({ items }) {
  console.log(items);
  return (
    <section className={"shop"}>
      {items.map((item) => {
        return <Product item={item} />;
      })}
    </section>
  );
}
