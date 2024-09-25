import classNames from "classnames";
import cardIceCream from "./card-icecream.png";
import cardDonuts from "./card-donuts.png";
import Button from "../Button/Button";
import "./Card.css";

export default function Card(props) {
  const className = classNames("card", {
    "card--icecream": props.category === "icecream",
    "card--donuts": props.category !== "icecream",
  });
  function handleClick() {
    props.category === "icecream"
      ? alert("Icecream added to cart!")
      : alert("Donuts added to cart!");
  }
  return (
    <div className={className}>
      <div>
        <h2 className="card-title">{props.title}</h2>
        <Button size="small" color="white" onClick={handleClick}>
          Buy Now
        </Button>
      </div>
      <img
        className="card-img"
        src={props.category === "icecream" ? cardIceCream : cardDonuts}
        alt="Icecream image"
      />
    </div>
  );
}
