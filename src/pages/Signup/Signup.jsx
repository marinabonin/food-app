import "./Signup.css";
import FormSignup from "../../components/FormSignup/FormSignup";

export default function Signup() {
  return (
    <>
      <img className="page-logo" src="/page-logo.png" />
      <h1 className="page-title">Deliver Favourite Food</h1>
      <div className="form-login">
        <FormSignup />
      </div>
      <p className="account-text">Already have an account?</p>
      <a className="register-link" href="#">
        Signup
      </a>
    </>
  );
}
