import "./FoodCard.css";

export default function FoodCard(props) {
  return (
    <div className="food-card">
      <img className="food-img" src={props.src} alt="Food Image" />
      <h2 className="food-title">{props.title}</h2>
      <h3 className="food-price">{props.price}</h3>
    </div>
  );
}
