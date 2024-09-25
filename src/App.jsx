import "./App.css";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";

function App() {
  return (
    <>
      <Card
        title="Special Deal For
December"
        category="icecream"
      />
      <Card
        title="Special Deal For
January"
      />
      <Button>Check Out</Button>
    </>
  );
}

export default App;
