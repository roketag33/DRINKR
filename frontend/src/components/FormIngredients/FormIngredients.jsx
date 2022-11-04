import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Title from "../titleblock/title/Title";
import ingredients from "./IngredientsArray";
import "./FormIngredients.css";

const FormIngredients = () => {
  const [ingredient, setIngredient] = useState([]);
  const [fetche, setFetche] = useState();
  useEffect(() => {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${ingredient}`
      )
      .then((response) => setFetche(response.data.drinks));
  }, [ingredient]);

  return (
    <div className="homePage">
      <Title />
      <div className="form__container">
        <h4 className="form__title">1-ALCOOL</h4>
        <div className="form__container__ingredients">
          {ingredients.alcool.map((elements) => (
            <button
              className="form__btn btn"
              type="button"
              value={elements}
              onClick={(event) =>
                setIngredient([...ingredient, event.target.value])
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
                setIngredient([...ingredient, event.target.value])
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
                setIngredient([...ingredient, event.target.value])
              }
            >
              {elements}
            </button>
          ))}
        </div>
        <NavLink to={`/TestAllCocktail/${ingredient}`}>
          <button className="form__btn__go btn" type="button">
            LET'S GO
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default FormIngredients;
