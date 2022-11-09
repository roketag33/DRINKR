import React from "react";
import PropTypes from "prop-types";
import Title from "../titleblock/title/Title";
import AllCocktailsCardIngredients from "./AllCocktailsCardIngredients";
import "../AllCocktails/AllCocktails.css";
import MenuBurger from "../MenuBurger/MenuBurger";

const AllCocktailsIngredients = ({ propsFetche }) => {
  return (
    <div className="allcocktails_section">
      <MenuBurger />
      <Title />
      <div className="list__allcocktails">
        {propsFetche.map((e) => (
          <AllCocktailsCardIngredients propsFetche={e} />
        ))}
      </div>
      <img
        className="green_drinks"
        src="/src/assets/images/green_cocktail.png"
        alt="green_cocktail"
      />
    </div>
  );
};

AllCocktailsIngredients.propTypes = {
  propsFetche: PropTypes.objectOf.isRequired,
};
export default AllCocktailsIngredients;
