import React from "react";
import { NavLink } from "react-router-dom";
import ResultList from "./ResultList";

const ButtonListResult = ({
  search,
  userInput,
  setSearch,
  classname,
  classeNameLi,
}) => {
  return (
    <div className={search && classname}>
      {search &&
        search
          .filter((el) =>
            el.strDrink.toLowerCase().includes(userInput.toLowerCase())
          )
          .map((el, id) => (
            <NavLink to={`/CocktailRecipe/${el.idDrink}`}>
              <ResultList
                className={classeNameLi}
                setSearch={setSearch}
                id={id}
                el={el}
              />
            </NavLink>
          ))}
    </div>
  );
};

export default ButtonListResult;
