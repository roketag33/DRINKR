import PropTypes from "prop-types";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import ResultList from "../Buttonlist/ResultList";
import SearchBar from "../Buttonlist/SearchBar";
import RecipeIngredientsList from "./RecipeIngredientsList";
import "./CocktailRecipe.css";
import Title from "../titleblock/title/Title";

const CocktailRecipe = ({ userInput, handleChange, search }) => {
  const [cocktail, setCocktail] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
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
    <div className="cocktailRecipe__container">
      <img
        className="cocktailRecipe__bg"
        src="../src/assets/images/blue_transparent.png"
        alt=""
      />
      <Title />
      <form action="submit" className="cocktailRecipe__form ">
        <SearchBar
          className="cocktailRecipe__searchbar"
          value={userInput}
          handleChange={handleChange}
        />

        <div className={search && "cocktailRecipe__resultList"}>
          {search &&
            search
              .filter((el) => el.strDrink.toLowerCase().includes(userInput))
              .map((el) => (
                <NavLink
                  test={el.strDrink}
                  to={`/CocktailRecipe/${el.idDrink}`}
                >
                  <ResultList className="cocktailRecipe__resultLi" el={el} />
                </NavLink>
              ))}
        </div>
      </form>
      <div className="cocktailRecipe__card card ">
        <img
          className="card__star"
          src="../src/assets/images/etoile.png"
          alt=""
        />
        <img
          src={cocktail.strDrinkThumb}
          alt="of the cocktail"
          className="cocktailRecipe__img"
        />
        <h1 className="cocktailRecipe__title">{cocktail.strDrink}</h1>
        <h5 className="cocktailRecipe__subTitle">Ingredients: </h5>
        <ul className="cocktailRecipe__ingredientsList">
          {ingredients
            .filter((el) => typeof el === "string")
            .map((elem) => (
              <RecipeIngredientsList ingredient={elem} />
            ))}
        </ul>
        <h5 className="cocktailRecipe__subTitle">Let's do it : </h5>
        <p className="cocktailRecipe__instructions">
          {cocktail.strInstructions}
        </p>
      </div>
    </div>
  );
};
CocktailRecipe.propTypes = {
  handleChange: PropTypes.func.isRequired,
  userInput: PropTypes.string.isRequired,
  search: PropTypes.func.isRequired,
};
export default CocktailRecipe;
