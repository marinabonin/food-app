import "./FormLogin.css";
import Input from "../Input/Input";
import Button from "../Button/Button";

export default function FormLogin() {
  function handleClick() {
    alert("Logged in!");
  }
  return (
    <form className="container">
      <h2 className="form-title">Login</h2>
      <div className="inputs">
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </div>
      <a className="forget-password" href="#">
        Forget Password?
      </a>
      <Button pinksize="formcard" onClick={handleClick}>
        Login
      </Button>
      <p className="or-text">Or</p>
      <div className="login-methods">
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
          >
            <g clipPath="url(#clip0_517_229)">
              <path
                d="M27.319 14.2619C27.319 13.1148 27.226 12.2777 27.0247 11.4095H13.939V16.5872H21.62C21.4652 17.8739 20.629 19.8117 18.7706 21.1138L18.7445 21.2871L22.882 24.4957L23.1687 24.5243C25.8013 22.0905 27.319 18.5095 27.319 14.2619Z"
                fill="#4285F4"
              />
              <path
                d="M13.9392 27.9038C17.7022 27.9038 20.8614 26.6636 23.1689 24.5244L18.7708 21.1138C17.5939 21.9355 16.0143 22.509 13.9392 22.509C10.2535 22.509 7.12531 20.0753 6.0102 16.7113L5.84676 16.7252L1.54454 20.0582L1.48828 20.2147C3.7802 24.7723 8.488 27.9038 13.9392 27.9038Z"
                fill="#34A853"
              />
              <path
                d="M6.01001 16.7113C5.71578 15.8432 5.5455 14.913 5.5455 13.9519C5.5455 12.9907 5.71578 12.0606 5.99453 11.1925L5.98674 11.0076L1.63062 7.62109L1.4881 7.68896C0.543484 9.58024 0.00146484 11.7041 0.00146484 13.9519C0.00146484 16.1997 0.543484 18.3234 1.4881 20.2147L6.01001 16.7113Z"
                fill="#FBBC05"
              />
              <path
                d="M13.9391 5.3947C16.5563 5.3947 18.3216 6.52635 19.3283 7.47205L23.2617 3.6275C20.846 1.37969 17.7022 0 13.9391 0C8.48799 0 3.7802 3.1314 1.48828 7.68899L5.99472 11.1925C7.12531 7.82857 10.2535 5.3947 13.9391 5.3947Z"
                fill="#EB4335"
              />
            </g>
            <defs>
              <clipPath id="clip0_517_229">
                <rect width="27.3333" height="28" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="28"
            viewBox="0 0 29 28"
            fill="none"
          >
            <g clipPath="url(#clip0_517_234)">
              <path
                d="M14.3335 28.0001C22.0655 28.0001 28.3335 21.7321 28.3335 14.0001C28.3335 6.26808 22.0655 6.10352e-05 14.3335 6.10352e-05C6.60151 6.10352e-05 0.333496 6.26808 0.333496 14.0001C0.333496 21.7321 6.60151 28.0001 14.3335 28.0001Z"
                fill="#3C5A9A"
              />
              <path
                d="M18.8856 4.2973H15.7843C13.9438 4.2973 11.8967 5.07137 11.8967 7.73916C11.9057 8.66872 11.8967 9.55897 11.8967 10.5609H9.76758V13.949H11.9626V23.7027H15.9961V13.8846H18.6583L18.8992 10.5514H15.9266C15.9266 10.5514 15.9332 9.06862 15.9266 8.63801C15.9266 7.58376 17.0236 7.64413 17.0896 7.64413C17.6116 7.64413 18.6266 7.64565 18.8871 7.64413V4.2973H18.8856Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_517_234">
                <rect
                  width="28"
                  height="28"
                  fill="white"
                  transform="translate(0.333496)"
                />
              </clipPath>
            </defs>
          </svg>
        </a>
      </div>
    </form>
  );
}
