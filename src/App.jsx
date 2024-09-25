import "./App.css";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";

function App() {
  function handleClick() {
    alert("Checked out!");
  }
  return (
    <div className="page">
      <div className="voucher">
        <h1 className="page-title">Voucher Promo</h1>
        <Card
          title="Special Deal For
December"
          category="icecream"
        />
        <Card
          title="Special Deal For
January"
        />
      </div>
      <div className="actions">
        <Button onClick={handleClick}>Check Out</Button>
      </div>
    </div>
  );
}

export default App;
