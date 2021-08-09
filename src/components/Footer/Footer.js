import React from "react";

export default function Footer({ handleClick }) {
  return (
    <footer className={"footer__container"}>
      <button className={"button btn-start-over"} onClick={handleClick}>
        start over
      </button>
      
    </footer>
  );
}
