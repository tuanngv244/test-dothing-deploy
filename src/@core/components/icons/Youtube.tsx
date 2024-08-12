import React, { FunctionComponent } from "react";

type YoutubeProps = {
    color?: string
}

const Youtube: FunctionComponent<YoutubeProps> = ({ color = '#263238' }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.1"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.6677 10.4995C23.4021 10.701 23.9804 11.2948 24.1767 12.0488C24.5333 13.4153 24.5333 16.2666 24.5333 16.2666C24.5333 16.2666 24.5333 19.1178 24.1767 20.4845C23.9804 21.2385 23.4021 21.8322 22.6677 22.0338C21.3369 22.4 16 22.4 16 22.4C16 22.4 10.6631 22.4 9.33218 22.0338C8.59783 21.8322 8.0195 21.2385 7.82323 20.4845C7.46667 19.1178 7.46667 16.2666 7.46667 16.2666C7.46667 16.2666 7.46667 13.4153 7.82323 12.0488C8.0195 11.2948 8.59783 10.701 9.33218 10.4995C10.6631 10.1333 16 10.1333 16 10.1333C16 10.1333 21.3369 10.1333 22.6677 10.4995ZM14.4 13.8666V19.1999L18.6667 16.5333L14.4 13.8666Z"
        fill={color}
      />
    </svg>
  );
};

export default Youtube;
