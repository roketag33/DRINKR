import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Buttons from "./Buttons";
import SearchBar from "./SearchBar";
import ResultList from "./ResultList";
import Titleblock from "../titleblock/Titleblock";
import "./ButtonList.css";

const ButtonList = ({ userInput, handleChange, search, setSearch }) => {
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
      <NavLink className="margin" to="/FormIngredients">
        <Buttons
          type=""
          className="list__btn  btn-up btn"
          value="Add your ingredients"
        />
      </NavLink>
      <Buttons
        type=""
        className="list__btn btn-midle btn margin"
        value="Search all cocktails"
      />
      <form
        action="submit"
        className="button_list_form button-list__form btn-down margin "
      >
        <SearchBar
          className="list__searchbar"
          value={userInput}
          handleChange={handleChange}
        />

        <div className={search && "button-list__result-container"}>
          {search &&
            search
              .filter((el) =>
                el.strDrink.toLowerCase().includes(userInput.toLowerCase())
              )
              .map((el, id) => (
                <NavLink to={`/CocktailRecipe/${el.idDrink}`}>
                  <ResultList
                    className="button-list__result__li"
                    setSearch={setSearch}
                    id={id}
                    el={el}
                  />
                </NavLink>
              ))}
        </div>
      </form>
    </div>
  );
};
ButtonList.propTypes = {
  handleChange: PropTypes.func.isRequired,
  userInput: PropTypes.string.isRequired,
  search: PropTypes.func.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default ButtonList;
