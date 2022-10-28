import { BrowserRouter, Routes, Route } from "react-router-dom";
import MajorityBlock from "./components/MajorityBlock/MajorityBlock";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
// import RecipePage from "./components/RecipePage/RecipePage";
// import AllCocktails from "./components/RecipePage/AllCocktails";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/drinker" element={<Homepage />} />
          {/* <Route path="/recipe" element={<Recipepage/>}/>
    <Route path="/allcocktails" element={<Allcocktails/>}/> */}
          <Route path="*" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
      <MajorityBlock />
      <Homepage />
    </div>
  );
};

export default App;
