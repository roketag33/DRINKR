import React from "react";
import PropTypes from "prop-types";

function SearchBar({ onChange, value }) {
  return (
    <input
      value={value}
      onChange={onChange}
      className="list__searchbar"
      type="text"
      placeholder="Search your cocktail"
    />
  );
}
SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.objectOf.isRequired,
};
export default SearchBar;
