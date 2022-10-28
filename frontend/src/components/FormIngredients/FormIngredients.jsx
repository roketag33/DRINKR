/* eslint-disable react/button-has-type */
import React from "react";
import "./FormIngredients.css";

const FormIngredients = () => {
  return (
    <div className="form__container">
      <h4 className="form__title">1-ALCOOL</h4>
      <div className="form__container__ingredients">
        <button className="form__btn">GIN</button>
        <button className="form__btn">VODKA</button>
        <button className="form__btn">RHUM</button>
        <button className="form__btn">WHISKY</button>
      </div>
      <h4 className="form__title">2-SOFT</h4>
      <div className="form__container__ingredients">
        <button className="form__btn">TONIC</button>
        <button className="form__btn">JUICE</button>
        <button className="form__btn">MILK</button>
        <button className="form__btn">WATER</button>
        <button className="form__btn">COKE</button>
        <button className="form__btn">SHWEPPS</button>
        <button className="form__btn">GINGER BEER</button>
        <button className="form__btn">SPRITE</button>
      </div>
      <h4 className="form__title">3-EXTRA</h4>
      <div className="form__container__ingredients">
        <button className="form__btn">LEMON</button>
        <button className="form__btn">LIME</button>
        <button className="form__btn">FRUITS</button>
        <button className="form__btn">ICE</button>
      </div>
    </div>
  );
};

// eslint-disable-next-line camelcase
export default FormIngredients;
