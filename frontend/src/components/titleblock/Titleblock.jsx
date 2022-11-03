import React from "react";
import Title from "./title/Title";
import Subtitle from "./subtitle/Subtitle";
import "./titleblock.css";

const Titleblock = () => {
  return (
    <div className="titleblock__container">
      <Title />
      <Subtitle />
    </div>
  );
};

export default Titleblock;
