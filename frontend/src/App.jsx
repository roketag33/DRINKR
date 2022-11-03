import { BrowserRouter, Routes, Route } from "react-router-dom";
import CocktailRecipe from "./components/CocktailRecipe/CocktailRecipe";
import FormIngredients from "./components/FormIngredients/FormIngredients";
import Homepage from "./components/Homepage/Homepage";
import ButtonList from "./components/Buttonlist/ButtonList";
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
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
