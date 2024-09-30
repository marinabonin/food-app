import Button from "../../components/Button/Button";
import Promotion from "../../components/Promotion/Promotion";
import "./VoucherPromo.css";

export default function VoucherPromo() {
  function handleClick() {
    alert("Checked out!");
  }
  return (
    <div className="page">
      <div className="voucher">
        <h1 className="page-title">Voucher Promo</h1>
        <Promotion
          title="Special Deal For
December"
          category="icecream"
        />
        <Promotion
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
