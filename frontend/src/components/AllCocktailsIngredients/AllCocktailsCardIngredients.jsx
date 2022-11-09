import { React, useState, useEffect } from "react";
import axios from "axios";

const AllCocktailsCardIngredients = ({ propsFetche }) => {
  const [cocktail, setCocktail] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${propsFetche.idDrink}`
      )
      .then((response) => setCocktail(response.data.drinks[0]));
  }, [cocktail]);

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
    <div className="container_card">
      <div className="allcocktails__card">
        <div className="allcocktails__frontcard">
          <img
            src={propsFetche.strDrinkThumb}
            alt={propsFetche.strDrink}
            className="allcocktails__img"
          />
          <h1 className="allcocktails__title">{propsFetche.strDrink}</h1>
        </div>
        <div className="allcocktails__backcard">
          <h5 className="allcocktails__subTitle">Ingredients: </h5>
          <ul className="allcocktails__ingredientsList">
            {ingredients
              .filter((el) => typeof el === "string")
              .map((elem) => (
                <li className="allcocktails__li">{elem}</li>
              ))}
          </ul>
          <ul className="allcocktails__ingredients" />
          <h5 className="allcocktails__subTitle">Let's do it : </h5>
          <p className="allcocktails__paraf">{cocktail.strInstructions}</p>
        </div>
      </div>
    </div>
  );
};

export default AllCocktailsCardIngredients;
