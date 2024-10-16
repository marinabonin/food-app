import "./Input.css";

export default function Input({ type = "text", placeholder, onChange, value }) {
  return (
    <div className="inputBox">
      {type === "text" && (
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
      )}
      {type === "email" && (
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="13"
            viewBox="0 0 16 13"
            fill="none"
          >
            <path
              d="M14.4 0H1.6C0.72 0 0.00799999 0.72 0.00799999 1.6L0 11.2C0 12.08 0.72 12.8 1.6 12.8H14.4C15.28 12.8 16 12.08 16 11.2V1.6C16 0.72 15.28 0 14.4 0ZM14.08 3.4L8.424 6.936C8.168 7.096 7.832 7.096 7.576 6.936L1.92 3.4C1.83978 3.35497 1.76954 3.29413 1.71351 3.22116C1.65749 3.1482 1.61685 3.06462 1.59406 2.9755C1.57127 2.88637 1.5668 2.79355 1.58093 2.70265C1.59505 2.61174 1.62747 2.52465 1.67623 2.44664C1.72498 2.36863 1.78906 2.30132 1.86458 2.2488C1.9401 2.19627 2.0255 2.15961 2.1156 2.14104C2.2057 2.12247 2.29863 2.12237 2.38876 2.14076C2.4789 2.15914 2.56437 2.19563 2.64 2.248L8 5.6L13.36 2.248C13.4356 2.19563 13.5211 2.15914 13.6112 2.14076C13.7014 2.12237 13.7943 2.12247 13.8844 2.14104C13.9745 2.15961 14.0599 2.19627 14.1354 2.2488C14.2109 2.30132 14.275 2.36863 14.3238 2.44664C14.3725 2.52465 14.405 2.61174 14.4191 2.70265C14.4332 2.79355 14.4287 2.88637 14.4059 2.9755C14.3832 3.06462 14.3425 3.1482 14.2865 3.22116C14.2305 3.29413 14.1602 3.35497 14.08 3.4Z"
              fill="black"
            />
          </svg>
        </span>
      )}
      {type === "password" && (
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
          >
            <path
              d="M15.8332 9.49998C15.8332 8.62677 15.123 7.91665 14.2498 7.91665H13.4582V5.54165C13.4582 3.35902 11.6825 1.58331 9.49984 1.58331C7.31721 1.58331 5.5415 3.35902 5.5415 5.54165V7.91665H4.74984C3.87663 7.91665 3.1665 8.62677 3.1665 9.49998V15.8333C3.1665 16.7065 3.87663 17.4166 4.74984 17.4166H14.2498C15.123 17.4166 15.8332 16.7065 15.8332 15.8333V9.49998ZM7.12484 5.54165C7.12484 4.23223 8.19042 3.16665 9.49984 3.16665C10.8093 3.16665 11.8748 4.23223 11.8748 5.54165V7.91665H7.12484V5.54165Z"
              fill="black"
            />
          </svg>
        </span>
      )}
      <input
        onChange={onChange}
        value={value}
        className="input"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}
