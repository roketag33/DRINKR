import React from "react";
import { NavLink } from "react-router-dom";
import "./title.css";

const Title = () => {
  return (
    <NavLink to="/ButtonList">
      <h1 className="main__title-logo">DRINK'R</h1>
    </NavLink>
  );
};

export default Title;
