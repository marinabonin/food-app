import "./ExploreMenu.css";
import FoodCard from "../../components/FoodCard/FoodCard";
import MenuBar from "../../components/MenuBar/MenuBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useEffect, useState } from "react";

export default function ExploreMenu() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    async function getMenuItems() {
      const response = await fetch("http://localhost:5173/menu-items.json");
      const data = await response.json();
      setMenuItems(data);
    }
    getMenuItems();
  }, []);

  return (
    <div className="container">
      <h1 className="page-title">
        Find Your <br /> Favourite Food
      </h1>
      <SearchBar />
      <h2 className="food-cards-title">Popular Menu</h2>
      <div className="food-cards">
        {console.log(menuItems)}
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
      </div>
      <div className="menubar">
        <MenuBar />
      </div>
    </div>
  );
}
