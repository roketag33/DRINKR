import React from "react";
import Title from "../titleblock/title/Title";
import ingredients from "./IngredientsArray";
import "./FormIngredients.css";

const FormIngredients = () => {
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
            <button className="form__btn btn" type="button">
              {elements}
            </button>
          ))}
        </div>
        <h4 className="form__title">2-SOFT</h4>
        <div className="form__container__ingredients">
          {ingredients.soft.map((elements) => (
            <button className="form__btn btn" type="button">
              {elements}
            </button>
          ))}
        </div>
        <h4 className="form__title">3-EXTRA</h4>
        <div className="form__container__ingredients">
          {ingredients.extra.map((elements) => (
            <button className="form__btn btn" type="button">
              {elements}
            </button>
          ))}
        </div>
        <button className="form__btn__go btn" type="button">
          LET'S GO
        </button>
      </div>
    </div>
  );
};

export default FormIngredients;
