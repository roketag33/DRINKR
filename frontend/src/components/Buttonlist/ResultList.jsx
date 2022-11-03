import React from "react";
import PropTypes from "prop-types";

const ResultList = ({ el, id }) => {
  return (
    <li key={id} className="button-list__result__li">
      {el.strDrink}
    </li>
  );
};

ResultList.propTypes = {
  el: PropTypes.objectOf.isRequired,
  id: PropTypes.number.isRequired,
};
export default ResultList;
