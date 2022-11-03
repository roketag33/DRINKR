import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Buttons from "./Buttons";
import SearchBar from "./SearchBar";
import ResultList from "./ResultList";
import Titleblock from "../titleblock/Titleblock";
import "./ButtonList.css";

const ButtonList = () => {
  const [search, setSearch] = useState();
  const [userInput, setUserInput] = useState("");

  const handleChange = (event) => {
    if (!search) {
      axios
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${event.target.value.charAt(
            0
          )}`
        )
        .then((response) => setSearch(response.data.drinks));
    } else {
      axios
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${event.target.value.charAt(
            0
          )}`
        )
        .then((response) => setSearch(response.data.drinks));
    }
    setUserInput(event.target.value);
  };

  return (
    <div className="button-list__container">
      <Titleblock />
      <img
        className="home__bg-pink"
        src="/src/assets/images/pink_cocktailtrans.png"
        alt=""
      />
      <img
        className="home__bg-mint"
        src="/src/assets/images/Fresh-mint-leaves--on-transparent-background-PNG 16.48.26.png"
        alt=""
      />
      <NavLink to="/FormIngredients">
        <Buttons
          type=""
          className="list__btn  btn-up btn"
          value="Add your ingredients"
        />
      </NavLink>
      <Buttons
        type=""
        className="list__btn btn-midle btn"
        value="Search all cocktails"
      />
      <form action="submit" className="button-list__form btn-down">
        <SearchBar value={userInput} onChange={handleChange} />
      </form>
      <div className="button-list__result-container">
        {search &&
          search
            .filter((el) => el.strDrink.toLowerCase().includes(userInput))
            .map((el, id) => (
              <NavLink test={el.strDrink} to={`/CocktailRecipe/${el.idDrink}`}>
                <ResultList id={id} el={el} />
              </NavLink>
            ))}
      </div>
    </div>
  );
};

export default ButtonList;
