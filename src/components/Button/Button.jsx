import classNames from "classnames";
import "./Button.css";

export default function Button(props) {
  const className = classNames("btn", {
    "btn--small": props.size === "small",
    "btn--white": props.color === "white",
  });
  return <button className={className}>{props.children}</button>;
}
