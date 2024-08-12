import React, { FunctionComponent } from "react";

type NextProps = {
  color?: string;
};

const Next: FunctionComponent<NextProps> = ({ color = "#C1272D" }) => {
  return (
    <svg
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="23"
        cy="23"
        r="23"
        transform="matrix(-1 0 0 1 46 0)"
        fill="#C1272D"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.0572 14.0573C18.5779 13.5366 19.4221 13.5366 19.9428 14.0573L27.9428 22.0573C28.4635 22.578 28.4635 23.4222 27.9428 23.9429L19.9428 31.9429C19.4221 32.4636 18.5779 32.4636 18.0572 31.9429C17.5365 31.4222 17.5365 30.578 18.0572 30.0573L25.1144 23.0001L18.0572 15.9429C17.5365 15.4222 17.5365 14.578 18.0572 14.0573Z"
        fill="white"
      />
    </svg>
  );
};

export default Next;
