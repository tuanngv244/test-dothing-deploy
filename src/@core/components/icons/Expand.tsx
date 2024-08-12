import React, { FunctionComponent } from "react";

type ExpandProps = {
  color?: string;
};

const Expand: FunctionComponent<ExpandProps> = ({ color = "#89939E" }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.77771 12.0378C8.37747 12.533 7.62253 12.533 7.22229 12.0378L3.25422 7.12862C2.72564 6.47468 3.19108 5.5 4.03193 5.5L11.9681 5.5C12.8089 5.5 13.2744 6.47468 12.7458 7.12862L8.77771 12.0378Z"
        fill={color}
      />
    </svg>
  );
};

export default Expand;
