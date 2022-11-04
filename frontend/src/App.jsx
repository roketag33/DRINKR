import { BrowserRouter, Routes, Route } from "react-router-dom";
import CocktailRecipe from "./components/CocktailRecipe/CocktailRecipe";
import FormIngredients from "./components/FormIngredients/FormIngredients";
import Homepage from "./components/Homepage/Homepage";
import ButtonList from "./components/Buttonlist/ButtonList";
import IngredientsCocktail from "./components/FormIngredients/TestAllCocktail";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/ButtonList" element={<ButtonList />} />
          <Route path="/FormIngredients" element={<FormIngredients />} />
          <Route path="/CocktailRecipe/:id" element={<CocktailRecipe />} />
          <Route
            path="/TestAllCocktail/:ingredient"
            element={<IngredientsCocktail />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
