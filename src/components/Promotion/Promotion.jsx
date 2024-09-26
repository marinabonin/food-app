/* eslint-disable react/prop-types */
import classNames from "classnames";
import cardIceCream from "./promotion-icecream.png";
import cardDonuts from "./promotion-donuts.png";
import Button from "../Button/Button";
import "./Promotion.css";

export default function Promotion(props) {
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
