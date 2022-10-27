import "./Homepage.css";
// import Titlesblock from "./components/Titlesblock.jsx"

const Homepage = () => {
  return (
    <div>
      {/* <Titlesblock /> */}
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
    </div>
  );
};

export default Homepage;
