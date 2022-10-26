import React from "react";
import "./titleblock.css";
import Title from "./title/Title";
import Subtitle from "./subtitle/Subtitle";

function Titleblock() {
  return (
    <div className="titleblock__container">
      <Title />
      <Subtitle />
    </div>
  );
}

export default Titleblock;
