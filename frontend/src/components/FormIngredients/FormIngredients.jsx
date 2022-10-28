import React from "react";
import "./FormIngredients.css";

const ingredients = {
  alcool: ["GIN", "VODKA", "RHUM", "WHISKY"],
  soft: [
    "TONIC",
    "JUICE",
    "MILK",
    "WATER",
    "COKE",
    "SWEPPS",
    "GINGER BEER",
    "sprite",
  ],
  extra: ["LEMON", "LIME", "FRUITS", "ICE"],
};

function FormIngredients() {
  return (
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
        Let's GO
      </button>
    </div>
  );
}

export default FormIngredients;
