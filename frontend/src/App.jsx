import MajorityBlock from "./components/MajorityBlock/MajorityBlock";
import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
// import RecipePage from "./components/RecipePage/RecipePage";
// import AllCocktails from "./components/RecipePage/AllCocktails";

const App = () => {
  return (
    // <BrowserRouter>
    // <Routes>
    // <Route path="/drinker" element={<Homepage/>}/>
    // <Route path="/recipe" element={<Recipepage/>}/>
    // <Route path="/recipe" element={<Allcocktails/>}/>
    // <Route path="*" element={<Homepage/>}/>
    // </Routes>
    // </BrowserRouter>
    <div className="App">
      <MajorityBlock />
      <Homepage />
    </div>
  );
};

export default App;
