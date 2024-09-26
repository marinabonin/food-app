import "./App.css";
import FoodCard from "./components/FoodCard/FoodCard";
// import SearchBar from "./components/SearchBar/SearchBar";

import burgerImg from "./components/FoodCard/food-card-burger.png";

function App() {
  return <FoodCard src={burgerImg} title="Zinger Burger" price="$2" />;
}

export default App;
