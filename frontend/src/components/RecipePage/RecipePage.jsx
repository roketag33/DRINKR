import "./RecipePage.css";
import Titleblock from "../titleblock/Titleblock";

const RecipePage = () => {
  return (
    <div>
      <Titleblock />
      <img
        className="cocktail__recipepage"
        src="/src/assets/images/blue_transparent.png"
        alt="pink cocktail"
      />
    </div>
  );
};

export default RecipePage;
