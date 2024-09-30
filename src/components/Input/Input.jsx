import "./Input.css";

export default function Input() {
  return (
    <div className="inputBox">
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
        >
          <path
            d="M5.9375 5.14581C5.9375 7.10994 7.53588 8.70831 9.5 8.70831C11.4641 8.70831 13.0625 7.10994 13.0625 5.14581C13.0625 3.18169 11.4641 1.58331 9.5 1.58331C7.53588 1.58331 5.9375 3.18169 5.9375 5.14581ZM15.8333 16.625H16.625V15.8333C16.625 12.7783 14.1384 10.2916 11.0833 10.2916H7.91667C4.86083 10.2916 2.375 12.7783 2.375 15.8333V16.625H15.8333Z"
            fill="black"
          />
        </svg>
      </span>
      <input className="input" type="email" placeholder="Email" />
    </div>
  );
}
