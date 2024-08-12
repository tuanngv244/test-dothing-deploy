import React, { FunctionComponent } from "react";

type ChevronRightProps = {
    color?: string,
}

const ChevronRight: FunctionComponent<ChevronRightProps> = ({ color = '#fff' }) => {
  return (
    <svg
      width="3"
      height="6"
      viewBox="0 0 3 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.375 5.5L2.625 3L0.375 0.5"
        stroke={color}
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronRight;
