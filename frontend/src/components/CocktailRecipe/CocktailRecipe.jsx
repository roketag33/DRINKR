import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RecipeIngredientsList from "./RecipeIngredientsList";
import "./CocktailRecipe.css";

const CocktailRecipe = () => {
  const [cocktail, setCocktail] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => setCocktail(response.data.drinks[0]));
  }, []);

  const ingredients = [
    cocktail.strIngredient1,
    cocktail.strIngredient2,
    cocktail.strIngredient3,
    cocktail.strIngredient4,
    cocktail.strIngredient5,
    cocktail.strIngredient6,
    cocktail.strIngredient7,
    cocktail.strIngredient8,
    cocktail.strIngredient9,
    cocktail.strIngredient10,
    cocktail.strIngredient11,
    cocktail.strIngredient12,
    cocktail.strIngredient13,
    cocktail.strIngredient14,
    cocktail.strIngredient15,
  ];

  return (
    <div className="cocktailRecipe__container">
      <div className="cocktailRecipe__front-card card ">
        <img
          src={cocktail.strDrinkThumb}
          alt="of the cocktail"
          className="cocktailRecipe__Front-img"
        />
        <h1 className="cocktailRecipe__front-title">{cocktail.strDrink}</h1>
        <ul className="cocktailRecipe__front-ingredientsList">
          <h5>Ingredients: </h5>
          {ingredients
            .filter((el) => typeof el === "string")
            .map((elem) => (
              <RecipeIngredientsList ingredient={elem} />
            ))}
        </ul>
      </div>
      <div className="cocktailRecipe__back-card card">
        {cocktail.strInstructions}
      </div>
    </div>
  );
};

export default CocktailRecipe;
