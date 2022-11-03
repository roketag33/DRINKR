import React from "react";
import Title from "../titleblock/title/Title";
import "./AllCocktails.css";

const AllCocktails = () => {
  return (
    <div className="allcocktail_section">
      <Title />
      <img
        className="green_drinks"
        src="./src/assets/images/green_cocktail.png"
        alt="green_cocktail"
      />
    </div>
  );
};

export default AllCocktails;
