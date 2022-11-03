import React from "react";
import "./AllCocktailsCard.css";

const AllCocktailsCard = () => {
  return (
    <div className="allcocktails__card">
      <div className="allcocktails__frontcard">
        <img src=" " alt=" " className="allcocktails__Front-img" />
        <h1 className="allcocktails__title">Title here</h1>
      </div>
      <div className="allcocktails__backcard">
        <h5>Ingredients: </h5>
        <ul className="allcocktails__ingredients" />
        <h5> Recipe :</h5>
      </div>
    </div>
  );
};

export default AllCocktailsCard;
