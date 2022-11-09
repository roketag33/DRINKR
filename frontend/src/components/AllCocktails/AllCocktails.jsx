import React, { useState, useEffect } from "react";
import axios from "axios";
import Title from "../titleblock/title/Title";
import AllCocktailsCard from "../AllCocktailsCard/AllCocktailsCard";
import "./AllCocktails.css";
import MenuBurger from "../MenuBurger/MenuBurger";

const AllCocktails = () => {
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
        setCocktails(response.data.drinks);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchCocktails();
  }, []);
  if (loading) return <div>loading...</div>;
  if (error) return <div>error</div>;
  if (!cocktails) return null;
  return (
    <div className="allcocktails_section">
      <MenuBurger />
      <Title />
      <div className="list__allcocktails">
        {cocktails.map((cocktail) => (
          <AllCocktailsCard key={cocktail.id} cocktail={cocktail} />
        ))}
      </div>
      <img
        className="green_drinks"
        src="./src/assets/images/green_cocktail.png"
        alt="green_cocktail"
      />
    </div>
  );
};

export default AllCocktails;
