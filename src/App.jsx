import "./App.css";
import FormLogin from "./components/FormLogin/FormLogin";

function App() {
  return (
    <>
      <img className="page-logo" src="/page-logo.png" />
      <h1 className="page-title">Deliver Favourite Food</h1>
      <div className="form-login">
        <FormLogin />
      </div>
      <p className="account-text">Don't have an account?</p>
      <a className="register-link" href="#">
        REGISTER
      </a>
    </>
  );
}

export default App;
