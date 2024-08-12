import React, { FunctionComponent } from "react";

type LeftProps = {
  color?: string;
};

const Left: FunctionComponent<LeftProps> = ({ color = "#89939E" }) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 8L9.70711 10.2929C9.31658 10.6834 9.31658 11.3166 9.70711 11.7071L12 14M6 21H16C18.7614 21 21 18.7614 21 16V6C21 3.23858 18.7614 1 16 1H6C3.23858 1 1 3.23858 1 6V16C1 18.7614 3.23858 21 6 21Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Left;
