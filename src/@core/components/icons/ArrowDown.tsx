import React, { FunctionComponent } from "react";

type ArrowDownProps = {
  color?: string;
};

const ArrowDown: FunctionComponent<ArrowDownProps> = ({
  color = "#717171",
}) => {
  return (
    <svg
      width="12"
      height="6"
      viewBox="0 0 12 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 0.699999L5.23572 4.33062C5.6851 4.7158 6.34823 4.7158 6.79762 4.33061L11.0333 0.7"
        stroke={color}
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ArrowDown;
