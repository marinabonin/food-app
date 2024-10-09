import "./FormSignup.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useState } from "react";

export default function FormSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleClick() {
    alert([name, email, password]);
  }
  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  return (
    <form className="container">
      <h2 className="form-title">Signup</h2>
      <div className="inputs">
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <div className="create-account-btn">
          <Button size="medium" onClick={handleClick}>
            Create Account
          </Button>
        </div>
      </div>
    </form>
  );
}
