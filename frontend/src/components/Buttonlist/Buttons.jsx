import React from "react";
import PropTypes from "prop-types";

function Buttons({ value, className, onclick }) {
  return (
    <button onClick={onclick} type="button" className={className}>
      {value}
    </button>
  );
}
Buttons.propTypes = {
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onclick: PropTypes.objectOf.isRequired,
};

export default Buttons;
