import "./Homepage.css";
import Navigation from "../Navigation";
import Titleblock from "../titleblock/Titleblock";
import MajorityBlock from "../MajorityBlock/MajorityBlock";

const Homepage = () => {
  return (
    <div className="homePage__container">
      <Titleblock />
      <Navigation />
      <MajorityBlock />
      <img
        className="cocktail__mainpage"
        src="/src/assets/images/pink_cocktailtrans.png"
        alt="pink cocktail"
      />
      <img
        className="mintleaves"
        src="/src/assets/images/Fresh-mint-leaves--on-transparent-background-PNG 16.48.26.png"
        alt="mintleaves"
      />
    </div>
  );
};

export default Homepage;
