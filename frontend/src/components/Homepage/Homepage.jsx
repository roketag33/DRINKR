import "./Homepage.css";
import Titleblock from "../titleblock/Titleblock";
import Firstbutton from "../Firstbutton/Firstbutton";

function Homepage() {
  return (
    <div>
      <Titleblock />
      <img
        className="cocktail__mainpage"
        src="/src/assets/images/pink_cocktailtrans.png"
        alt="pink cocktail"
      />
      <img
        className="mintleaves"
        src="/src/assets/images/Fresh-mint-leaves--on-transparent-background-PNG.png"
        alt="mintleaves"
      />
      <Firstbutton />
    </div>
  );
}

export default Homepage;
