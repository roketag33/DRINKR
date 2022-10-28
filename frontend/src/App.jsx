import MajorityBlock from "./components/MajorityBlock/MajorityBlock";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import FormIngredients from "./components/FormIngredients/FormIngredients";

function App() {
  return (
    <div className="App">
      <MajorityBlock />
      <Homepage />
      <FormIngredients />
    </div>
  );
}

export default App;
