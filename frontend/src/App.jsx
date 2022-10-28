import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import ButtonList from "./components/ButtonList";
// import RecipePage from "./components/RecipePage/RecipePage";
// import AllCocktails from "./components/RecipePage/AllCocktails";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/buttonlist" element={<ButtonList />} />
          {/* <Route path="/recipe" element={<Recipepage/>}/>
    <Route path="/allcocktails" element={<Allcocktails/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
