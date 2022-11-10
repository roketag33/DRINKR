import React from "react";
import "./AllCocktailsCard.css";
import PropTypes from "prop-types";

const AllCocktailsCard = ({ cocktail }) => {
  return (
    <div className="flip-card">
      <div className="container_card">
        <div className="allcocktails__card">
          <div className="allcocktails__frontcard">
            <img
              className="star__notFavourite"
              src="src/assets/images/star_image.jpg"
              alt="star"
            />
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
