import SearchBar from "../../components/SearchBar/SearchBar";
import Promotion from "../../components/Promotion/Promotion";
import FoodCard from "../../components/FoodCard/FoodCard";
import burgerImg from "../../components/FoodCard/food-card-burger.png";
import rollImg from "../../components/FoodCard/food-card-roll.png";
import macaronImg from "../../components/FoodCard/food-card-macaron.png";
import cupcakeImg from "../../components/FoodCard/food-card-cupcake.png";
import MenuBar from "../../components/MenuBar/MenuBar";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="container">
        <h1 className="page-title">
          Find Your <br /> Favourite Food
        </h1>
        <SearchBar />
        <div className="promotion">
          <Promotion title="Special Deal For December" category="icecream" />
        </div>
        <div className="food-cards-category">
          <h2 className="food-cards-title">Popular Menu</h2>
          <a href="#" className="food-cards-view">
            View More
          </a>
        </div>
        <div className="food-cards">
          <FoodCard src={burgerImg} title="Zinger Burger" price="$2" />
          <FoodCard src={rollImg} title="Roll Paratha" price="$3" />
        </div>
        <div className="food-cards-category">
          <h2 className="food-cards-title">Deserts</h2>
          <a href="#" className="food-cards-view">
            View More
          </a>
        </div>
        <div className="food-cards">
          <FoodCard src={macaronImg} title="Macaron" price="$2" />
          <FoodCard src={cupcakeImg} title="Sour Cupcake" price="$3" />
        </div>
      </div>
      <div className="menubar">
        <MenuBar />
      </div>
    </>
  );
}

export default Home;
