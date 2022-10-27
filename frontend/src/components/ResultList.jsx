import React from "react";
import PropTypes from "prop-types";

function ResultList({ className, el }) {
  return <li className={className}>{el.strDrink}</li>;
}

ResultList.propTypes = {
  className: PropTypes.string.isRequired,
  el: PropTypes.objectOf.isRequired,
};
export default ResultList;
