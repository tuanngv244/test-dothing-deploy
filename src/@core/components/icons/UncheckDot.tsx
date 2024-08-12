import React, { FunctionComponent } from "react";

type UncheckDotProps = {
  colorTxt?: string;
  colorBg?: string;
};

const UncheckDot: FunctionComponent<UncheckDotProps> = ({
  colorBg = "#C1272D",
  colorTxt = "#fff",
}) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="20"
        height="20"
        rx="5"
        fill={colorTxt}
        stroke={colorBg}
        strokeWidth="1.5"
      />
      <path
        d="M8.5 10.5L10.5 12.5L14.5 8.5"
        stroke={colorTxt}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UncheckDot;
