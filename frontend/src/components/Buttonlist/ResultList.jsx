import React from "react";
import PropTypes from "prop-types";

const ResultList = ({ el }) => {
  return <li className="button-list__result__li">{el.strDrink}</li>;
};

ResultList.propTypes = {
  el: PropTypes.objectOf.isRequired,
};
export default ResultList;
