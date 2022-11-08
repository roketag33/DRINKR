import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import CocktailRecipe from "./components/CocktailRecipe/CocktailRecipe";
import FormIngredients from "./components/FormIngredients/FormIngredients";
import Homepage from "./components/Homepage/Homepage";
import ButtonList from "./components/Buttonlist/ButtonList";
import AllCocktails from "./components/AllCocktails/AllCocktails";
import "./App.css";

const App = () => {
  const [search, setSearch] = useState();
  const [userInput, setUserInput] = useState("");

  const handleChange = (event) => {
    if (!search) {
      axios
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${event.target.value.charAt(
            0
          )}`
        )
        .then((response) => setSearch(response.data.drinks));
    } else {
      axios
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${event.target.value.charAt(
            0
          )}`
        )
        .then((response) => setSearch(response.data.drinks));
    }
    setUserInput(event.target.value);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/ButtonList"
            element={
              <ButtonList
                setSearch={setSearch}
                userInput={userInput}
                search={search}
                handleChange={handleChange}
              />
            }
          />
          <Route path="/FormIngredients" element={<FormIngredients />} />
          <Route
            path="/CocktailRecipe/:id"
            element={
              <CocktailRecipe
                setSearch={setSearch}
                userInput={userInput}
                search={search}
                handleChange={handleChange}
                setUserInput={setUserInput}
              />
            }
          />

          <Route path="/AllCocktails" element={<AllCocktails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
