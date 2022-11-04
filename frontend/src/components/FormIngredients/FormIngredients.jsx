import axios from "axios";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Title from "../titleblock/title/Title";
import ingredients from "./IngredientsArray";
import "./FormIngredients.css";

const FormIngredients = ({
  propsIngredient,
  propsSetIngredient,
  propsSetFetche,
}) => {
  useEffect(() => {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${propsIngredient}`
      )
      .then((response) => propsSetFetche(response.data.drinks));
  }, [propsIngredient]);

  return (
    <div className="homePage">
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
      <Title />
      <h2 className="subtitle">Choose your ingredients</h2>
      <div className="form__container">
        <h4 className="form__title">1-ALCOOL</h4>
        <div className="form__container__ingredients">
          {ingredients.alcool.map((elements) => (
            <button
              className="form__btn btn"
              type="button"
              value={elements}
              onClick={(event) =>
                propsSetIngredient([...propsIngredient, event.target.value])
              }
            >
              {elements}
            </button>
          ))}
        </div>
        <h4 className="form__title">2-SOFT</h4>
        <div className="form__container__ingredients">
          {ingredients.soft.map((elements) => (
            <button
              className="form__btn btn"
              type="button"
              value={elements}
              onClick={(event) =>
                propsSetIngredient([...propsIngredient, event.target.value])
              }
            >
              {elements}
            </button>
          ))}
        </div>
        <h4 className="form__title">3-EXTRA</h4>
        <div className="form__container__ingredients">
          {ingredients.extra.map((elements) => (
            <button
              className="form__btn btn"
              type="button"
              value={elements}
              onClick={(event) =>
                propsSetIngredient([...propsIngredient, event.target.value])
              }
            >
              {elements}
            </button>
          ))}
        </div>
        <NavLink to={`/AllCocktailsIngredients/${propsIngredient}`}>
          <button className="form__btn__go btn" type="button">
            LET'S GO
          </button>
        </NavLink>
      </div>
    </div>
  );
};

FormIngredients.propTypes = {
  propsIngredient: PropTypes.objectOf.isRequired,
  propsSetIngredient: PropTypes.objectOf.isRequired,
  propsSetFetche: PropTypes.objectOf.isRequired,
};
export default FormIngredients;
