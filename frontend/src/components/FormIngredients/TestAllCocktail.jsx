import React from "react";
import FormIngredients from "./FormIngredients";

const IngredientsCocktail = (test) => {
  return (
    <div className="cocktailRecipe__container">
      <div className="cocktailRecipe__front-card card ">
        <h1>Hello</h1>
        <img
          src={test}
          alt="of the cocktail"
          className="cocktailRecipe__Front-img"
        />
      </div>
    </div>
  );
};

export default IngredientsCocktail;
