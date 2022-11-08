import React from "react";

const AllCocktailsCardIngredients = ({ propsFetche }) => {
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
          <h5>Ingredients: </h5>
          <ul className="allcocktails__ingredients" />
          <h5> Recipe :</h5>
          <p>{propsFetche.strInstructions}</p>
        </div>
      </div>
    </div>
  );
};

export default AllCocktailsCardIngredients;
