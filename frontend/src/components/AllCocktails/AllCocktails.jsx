import React from "react";
import Title from "../titleblock/title/Title";
import AllCocktailsCard from "../AllCocktailsCard/AllCocktailsCard";
import "./AllCocktails.css";

const AllCocktails = () => {
  return (
    <div className="allcocktails_section">
      <Title />
      <div className="list__allcocktails">
        <AllCocktailsCard />
        <AllCocktailsCard />
        <AllCocktailsCard />
        <AllCocktailsCard />
      </div>
      <img
        className="green_drinks"
        src="./src/assets/images/green_cocktail.png"
        alt="green_cocktail"
      />
    </div>
  );
};

export default AllCocktails;
