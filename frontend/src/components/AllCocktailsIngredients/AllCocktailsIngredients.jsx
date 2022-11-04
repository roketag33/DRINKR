/* eslint-disable no-shadow */
import React from "react";
import PropTypes from "prop-types";
import Title from "../titleblock/title/Title";
import AllCocktailsCardIngredients from "./AllCocktailsCardIngredients";

const AllCocktailsIngredients = ({ propsFetche }) => {
  return (
    <div className="allcocktails_section">
      <Title />
      <div className="list__allcocktails">
        {propsFetche.map((propsFetche, id) => (
          // eslint-disable-next-line react/no-array-index-key
          <AllCocktailsCardIngredients key={id} propsFetche={propsFetche} />
        ))}
      </div>
      <img
        className="green_drinks"
        src="./src/assets/images/green_cocktail.png"
        alt="green_cocktail"
      />
    </div>
  );
};

AllCocktailsIngredients.propTypes = {
  propsFetche: PropTypes.objectOf.isRequired,
};
export default AllCocktailsIngredients;
