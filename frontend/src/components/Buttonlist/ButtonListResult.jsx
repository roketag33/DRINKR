import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
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
ButtonListResult.propTypes = {
  userInput: PropTypes.string.isRequired,
  search: PropTypes.func.isRequired,
  setSearch: PropTypes.func.isRequired,
  classname: PropTypes.string.isRequired,
  classeNameLi: PropTypes.string.isRequired,
};

export default ButtonListResult;
