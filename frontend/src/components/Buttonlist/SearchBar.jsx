import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({ className, handleChange, value }) => {
  return (
    <input
      value={value}
      onChange={handleChange}
      className={className}
      type="text"
      placeholder="Search your cocktail"
    />
  );
};
SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};
export default SearchBar;
