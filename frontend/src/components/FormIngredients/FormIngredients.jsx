import React from "react";
import Title from "../titleblock/title/Title";
import ingredients from "./IngredientsArray";
import "./FormIngredients.css";

const FormIngredients = () => {
  const [ingredient, setIngredient] = React.useState([]);
  const display = (e) => {
    e.preventDefault();
    console.log(ingredient);
  };
  return (
    <div className="homePage">
      <Title />
      <div className="form__container">
        <h4 className="form__title">1-ALCOOL</h4>
        <div className="form__container__ingredients">
          {ingredients.alcool.map((elements) => (
            <button onClick={display} className="form__btn btn" type="button">
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
