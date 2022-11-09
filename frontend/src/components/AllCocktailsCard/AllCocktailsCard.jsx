import { React, useState, useEffect } from "react";
import "./AllCocktailsCard.css";
import axios from "axios";

const AllCocktailsCard = ({ propsFetche, cocktail }) => {
  const [cocktails, setCocktail] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${propsFetche.idDrink}`
      )
      .then((response) => setCocktail(response.data.drinks[0]));
  }, [cocktails]);

  const Filtreingredients = [
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
import PropTypes from "prop-types";

  return (
    <div className="flip-card">
      <div className="container_card">
        <div className="allcocktails__card">
          <div className="allcocktails__frontcard">
            <img
              src={cocktail.strDrinkThumb}
              alt={cocktail.strDrink}
              className="allcocktails__img"
            />
            <h1 className="allcocktails__title">{cocktail.strDrink}</h1>
          </div>
          <div className="allcocktails__backcard">
            <div className="firstblock__title">
              <img
                className="drink_picto"
                src="src/assets/images/picto_drink.jpg"
                alt="picto_drink"
              />
              <h5>Ingredients: </h5>
            </div>
            <ul className="allcocktails__ingredients" />
            <div className="secondblock__title">
              <img
                className="shaker_picto"
                src="src/assets/images/picto_shaker.png"
                alt="picto_shaker"
              />
              <h5> Recipe :</h5>
            </div>
            <p>{cocktail.strInstructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

AllCocktailsCard.propTypes = {
  cocktail: PropTypes.string.isRequired,
};

export default AllCocktailsCard;
