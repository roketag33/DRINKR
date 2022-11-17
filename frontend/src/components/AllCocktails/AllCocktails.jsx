import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Loading from "../Loading/Loading";
import Title from "../titleblock/title/Title";
import AllCocktailsCard from "./AllCocktailsCard/AllCocktailsCard";
import "./AllCocktails.css";
import MenuBurger from "../MenuBurger/MenuBurger";
import SearchBar from "../Buttonlist/SearchBar";
import ButtonListResult from "../Buttonlist/ButtonListResult";

// import { gsap } from "gsap";

let Arraycocktails = [];

const AllCocktails = ({
  propsFetche,
  userInput,
  handleChange,
  search,
  setSearch,
}) => {
  //
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        setError(null);
        setCocktails(null);
        setLoading(true);
        const response = await axios.get(
          "https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php"
        );
        Arraycocktails = Arraycocktails.concat(response.data.drinks);
        setCocktails(Arraycocktails);
        setCocktails(response.data.drinks);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchCocktails();
  }, []);
  if (loading) return <Loading />;
  if (error) return <div>error</div>;
  if (!cocktails) return null;
  const searchCocktails = async () => {
    const response = await axios.get(
      "https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php"
    );
    Arraycocktails = Arraycocktails.concat(response.data.drinks);
    setCocktails(Arraycocktails);
    // <div className="list__allcocktails">
    //   {cocktails.map((cocktail) => (
    //     <AllCocktailsCard
    //       propsFetche={propsFetche}
    //       key={cocktail.id}
    //       cocktail={cocktail}
    //     />
    //   ))}
    // </div>;
  };

  return (
    <div className="allcocktails_section">
      <MenuBurger />
      <Title />
      <form
        // onSubmit={}
        className="allCocktails__form"
      >
        <SearchBar
          className="allCocktails__searchbar"
          value={userInput}
          handleChange={handleChange}
        />
        <ButtonListResult
          classeNameLi="allCocktails__result__li"
          classResultList="allCocktails__result__li"
          classname="allCocktails__resultList"
          search={search}
          userInput={userInput}
          setSearch={setSearch}
        />
      </form>

      <div className="list__allcocktails">
        {cocktails.map((cocktail) => (
          <AllCocktailsCard
            propsFetche={propsFetche}
            key={cocktail.id}
            cocktail={cocktail}
          />
        ))}
      </div>
      <button
        type="button"
        className="allcocktails__button"
        onClick={() => {
          searchCocktails();
        }}
      >
        <span>more cocktails ?</span>
      </button>
      <img
        className="green_drinks"
        src="./src/assets/images/green_cocktail.png"
        alt="green_cocktail"
      />
    </div>
  );
};

AllCocktails.propTypes = {
  propsFetche: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  userInput: PropTypes.string.isRequired,
  search: PropTypes.func.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default AllCocktails;
