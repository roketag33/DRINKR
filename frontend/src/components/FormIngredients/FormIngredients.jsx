import axios from "axios";
import React, { useEffect, useState } from "react";
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

  const deleteValeur = () => {
    propsSetIngredient([]);
  };
  const [isActive, setIsActive] = useState(ingredients.ALCOOL);

  const handleClick = (ingredientsName) => {
    const toto = isActive.map((el) => {
      if (el.name === ingredientsName) {
        return {
          ...el,
          isActive: !el.isActive,
        };
      }
      return { ...el };
    });
    setIsActive(toto);
  };

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
          {isActive.map((elements) => (
            <button
              className={
                elements.isActive ? "form__btn__click" : "form__btn btn"
              }
              type="button"
              value={elements.name}
              onClick={(event) => {
                handleClick(elements.name);
                propsSetIngredient([...propsIngredient, event.target.value]);
              }}
            >
              {elements.name}
            </button>
          ))}
        </div>
        <h4 className="form__title">2-SOFT</h4>
        <div className="form__container__ingredients">
          {ingredients.SOFT.map((elements) => (
            <button
              className="form__btn btn"
              type="button"
              value={elements.name}
              onClick={(event) =>
                propsSetIngredient([...propsIngredient, event.target.value])
              }
            >
              {elements.name}
            </button>
          ))}
        </div>
        <h4 className="form__title">3-EXTRA</h4>
        <div className="form__container__ingredients">
          {ingredients.EXTRA.map((elements) => (
            <button
              className="form__btn btn"
              type="button"
              value={elements.name}
              onClick={(event) =>
                propsSetIngredient([...propsIngredient, event.target.value])
              }
            >
              {elements.name}
            </button>
          ))}
        </div>
        <NavLink to={`/AllCocktailsIngredients/${propsIngredient}`}>
          <button
            className="form__btn__go btn"
            type="button"
            onClick={deleteValeur}
          >
            LET'S GO
          </button>
        </NavLink>
      </div>
    </div>
  );
};

FormIngredients.propTypes = {
  propsIngredient: PropTypes.objectOf.isRequired,
  propsSetIngredient: PropTypes.func.isRequired,
  propsSetFetche: PropTypes.func.isRequired,
};
export default FormIngredients;
