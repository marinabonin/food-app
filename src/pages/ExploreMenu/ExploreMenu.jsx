import "./ExploreMenu.css";
import FoodCard from "../../components/FoodCard/FoodCard";
import MenuBar from "../../components/MenuBar/MenuBar";
import SearchBar from "../../components/SearchBar/SearchBar";
// import zburgerImg from "../../components/FoodCard/food-card-zburger.png";
// import rollImg from "../../components/FoodCard/food-card-roll.png";
// import burgerImg from "../../components/FoodCard/food-card-burger.png";
// import sandwichImg from "../../components/FoodCard/food-card-sandwich.png";
// import pizzaImg from "../../components/FoodCard/food-card-pizza-roll.png";
// import misoImg from "../../components/FoodCard/food-card-miso-soup.png";
import menuItems from "./menu-items.json";

export default function ExploreMenu() {
  return (
    <div className="container">
      <h1 className="page-title">
        Find Your <br /> Favourite Food
      </h1>
      <SearchBar />
      <h2 className="food-cards-title">Popular Menu</h2>
      <div className="food-cards">
        {menuItems.map((item) => {
          return (
            <FoodCard
              key={item.id}
              src={item.src}
              title={item.title}
              price={`$${item.price}`}
            />
          );
        })}
        {/* <FoodCard src={zburgerImg} title="Z Burger" price="$2" />
        <FoodCard src={rollImg} title="Roll Paratha" price="$3" />
        <FoodCard src={burgerImg} title="Burger" price="$3" />
        <FoodCard src={sandwichImg} title="Sandwich" price="$2" />
        <FoodCard src={pizzaImg} title="Pizza Roll" price="$3" />
        <FoodCard src={misoImg} title="Miso Soup" price="$2" />
        <FoodCard src={pizzaImg} title="Pizza Roll" price="$3" />
        <FoodCard src={misoImg} title="Miso Soup" price="$2" />
        <FoodCard src={pizzaImg} title="Pizza Roll" price="$3" />
        <FoodCard src={misoImg} title="Miso Soup" price="$2" />
        <FoodCard src={pizzaImg} title="Pizza Roll" price="$3" /> */}
      </div>
      <div className="menubar">
        <MenuBar />
      </div>
    </div>
  );
}
