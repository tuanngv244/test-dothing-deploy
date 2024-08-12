import React, { FunctionComponent } from "react";

type UsersProps = {
  color?: string;
};

const Users: FunctionComponent<UsersProps> = ({ color = "#C1272D" }) => {
  return (
    <svg
      width="22"
      height="17"
      viewBox="0 0 22 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="3.40426"
        cy="3.40426"
        r="3.40426"
        transform="matrix(-1 0 0 1 14.6172 1)"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        d="M5.25537 12.8594C5.25537 12.1272 5.71567 11.474 6.40524 11.2277V11.2277C9.51413 10.1174 12.9115 10.1174 16.0204 11.2277V11.2277C16.71 11.474 17.1703 12.1272 17.1703 12.8594V13.979C17.1703 14.9896 16.2752 15.7659 15.2748 15.6229L14.9412 15.5753C12.4682 15.222 9.95746 15.222 7.48442 15.5753L7.15087 15.6229C6.15044 15.7659 5.25537 14.9896 5.25537 13.979V12.8594Z"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        d="M16.3191 7.90264C17.7964 7.90264 18.9939 6.70511 18.9939 5.22787C18.9939 3.75064 17.7964 2.5531 16.3191 2.5531"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M19.2486 14.0051L19.5106 14.0425C20.2967 14.1548 21 13.5448 21 12.7508V11.8711C21 11.2958 20.6383 10.7826 20.0965 10.5891C19.5561 10.3961 19.0045 10.2458 18.4468 10.1382"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M5.68088 7.90264C4.20364 7.90264 3.0061 6.70511 3.0061 5.22787C3.0061 3.75064 4.20364 2.5531 5.68088 2.5531"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M2.75143 14.0051L2.48935 14.0425C1.7033 14.1548 1.00003 13.5448 1.00003 12.7508V11.8711C1.00003 11.2958 1.3617 10.7826 1.9035 10.5891C2.44395 10.3961 2.99549 10.2458 3.55322 10.1382"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Users;
