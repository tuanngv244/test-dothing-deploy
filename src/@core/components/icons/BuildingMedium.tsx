import React, { FunctionComponent } from "react";

type BuildingMediumProps = {
  color?: string;
  line?: string;
};

const BuildingMedium: FunctionComponent<BuildingMediumProps> = ({
  color = "#C1272D",
  line = "#fff",
}) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" fill={color} />
      <g clipPath="url(#clip0_409_362)">
        <path
          d="M30.8332 11.6666H24.1665V13.3333H30.8332V30.8333H24.1665V32.5H32.4998V13.3333C32.4998 12.8913 32.3242 12.4673 32.0117 12.1548C31.6991 11.8422 31.2752 11.6666 30.8332 11.6666Z"
          fill={line}
        />
        <path
          d="M21.5668 7.5H10.1002C9.63161 7.5 9.18226 7.68613 8.85094 8.01744C8.51963 8.34876 8.3335 8.79812 8.3335 9.26667V32.5H23.3335V9.26667C23.3335 8.79812 23.1474 8.34876 22.8161 8.01744C22.4847 7.68613 22.0354 7.5 21.5668 7.5ZM21.6668 30.8333H19.1668V28.3333H12.5002V30.8333H10.0002V9.26667C10.0002 9.25353 10.0027 9.24053 10.0078 9.2284C10.0128 9.21627 10.0202 9.20524 10.0295 9.19596C10.0387 9.18667 10.0498 9.1793 10.0619 9.17428C10.074 9.16925 10.087 9.16667 10.1002 9.16667H21.5668C21.58 9.16667 21.593 9.16925 21.6051 9.17428C21.6172 9.1793 21.6283 9.18667 21.6375 9.19596C21.6468 9.20524 21.6542 9.21627 21.6592 9.2284C21.6642 9.24053 21.6668 9.25353 21.6668 9.26667V30.8333Z"
          fill={line}
        />
        <path
          d="M11.6665 11.6666H13.3332V13.3333H11.6665V11.6666Z"
          fill={line}
        />
        <path d="M15 11.6666H16.6667V13.3333H15V11.6666Z" fill={line} />
        <path
          d="M18.3335 11.6666H20.0002V13.3333H18.3335V11.6666Z"
          fill={line}
        />
        <path d="M11.6665 15.8334H13.3332V17.5H11.6665V15.8334Z" fill={line} />
        <path d="M15 15.8334H16.6667V17.5H15V15.8334Z" fill={line} />
        <path d="M18.3335 15.8334H20.0002V17.5H18.3335V15.8334Z" fill={line} />
        <path d="M11.6665 20H13.3332V21.6667H11.6665V20Z" fill={line} />
        <path d="M15 20H16.6667V21.6667H15V20Z" fill={line} />
        <path d="M18.3335 20H20.0002V21.6667H18.3335V20Z" fill={line} />
        <path
          d="M11.6665 24.1666H13.3332V25.8333H11.6665V24.1666Z"
          fill={line}
        />
        <path d="M15 24.1666H16.6667V25.8333H15V24.1666Z" fill={line} />
        <path
          d="M18.3335 24.1666H20.0002V25.8333H18.3335V24.1666Z"
          fill={line}
        />
        <path d="M24.1665 15.8334H25.8332V17.5H24.1665V15.8334Z" fill={line} />
        <path d="M27.5 15.8334H29.1667V17.5H27.5V15.8334Z" fill={line} />
        <path d="M24.1665 20H25.8332V21.6667H24.1665V20Z" fill={line} />
        <path d="M27.5 20H29.1667V21.6667H27.5V20Z" fill={line} />
        <path
          d="M24.1665 24.1666H25.8332V25.8333H24.1665V24.1666Z"
          fill={line}
        />
        <path d="M27.5 24.1666H29.1667V25.8333H27.5V24.1666Z" fill={line} />
      </g>
      <defs>
        <clipPath id="clip0_409_362">
          <rect width="30" height="30" fill={line} transform="translate(5 5)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BuildingMedium;
