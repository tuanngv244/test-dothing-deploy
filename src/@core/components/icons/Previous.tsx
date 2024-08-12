import React, { FunctionComponent } from "react";

type PreviousProps = {
  color?: string;
};

const Previous: FunctionComponent<PreviousProps> = ({ color = "#C1272D" }) => {
  return (
    <svg
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="23" cy="23" r="23" fill="#C1272D" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M27.9428 31.943C27.4222 32.4637 26.5779 32.4637 26.0572 31.943L18.0572 23.943C17.5365 23.4223 17.5365 22.5781 18.0572 22.0574L26.0572 14.0574C26.5779 13.5367 27.4221 13.5367 27.9428 14.0574C28.4635 14.5781 28.4635 15.4223 27.9428 15.943L20.8857 23.0002L27.9428 30.0574C28.4635 30.5781 28.4635 31.4223 27.9428 31.943Z"
        fill="white"
      />
    </svg>
  );
};

export default Previous;
