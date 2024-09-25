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
  return (
    <div className={className}>
      <div>
        <h2 className="card-title">{props.title}</h2>
        <Button size="small" color="white">
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
