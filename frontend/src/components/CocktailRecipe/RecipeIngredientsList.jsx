import React from "react";
import PropTypes from "prop-types";

const RecipeIngredientsList = ({ ingredient }) => {
  return <li className="cocktailRecipe__front-li">{ingredient}</li>;
};

export default RecipeIngredientsList;
RecipeIngredientsList.propTypes = {
  ingredient: PropTypes.string.isRequired,
};
