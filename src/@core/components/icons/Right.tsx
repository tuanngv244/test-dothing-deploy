import React, { FunctionComponent } from "react";

type RightProps = {
  color?: string;
};

const Right: FunctionComponent<RightProps> = ({ color = "#89939E" }) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 8L12.2929 10.2929C12.6834 10.6834 12.6834 11.3166 12.2929 11.7071L10 14M16 21H6C3.23858 21 1 18.7614 1 16V6C1 3.23858 3.23858 1 6 1H16C18.7614 1 21 3.23858 21 6V16C21 18.7614 18.7614 21 16 21Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Right;
