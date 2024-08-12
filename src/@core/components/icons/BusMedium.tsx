import React, { FunctionComponent } from "react";

type BusMediumProps = {
  color?: string;
  line?: string;
};

const BusMedium: FunctionComponent<BusMediumProps> = ({
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
      <path
        d="M30.3125 15.3125H32.1875V19.0625H30.3125V15.3125ZM7.8125 15.3125H9.6875V19.0625H7.8125V15.3125ZM23.75 23.75H25.625V25.625H23.75V23.75ZM14.375 23.75H16.25V25.625H14.375V23.75Z"
        fill={line}
      />
      <path
        d="M24.6875 8.75H15.3125C14.0698 8.75149 12.8783 9.24583 11.9996 10.1246C11.1208 11.0033 10.6265 12.1948 10.625 13.4375V26.5625C10.6255 27.0596 10.8232 27.5363 11.1747 27.8878C11.5262 28.2393 12.0029 28.437 12.5 28.4375V31.25H14.375V28.4375H25.625V31.25H27.5V28.4375C27.9971 28.4368 28.4735 28.239 28.825 27.8875C29.1765 27.536 29.3743 27.0596 29.375 26.5625V13.4375C29.3735 12.1948 28.8792 11.0033 28.0004 10.1246C27.1217 9.24583 25.9302 8.75149 24.6875 8.75ZM27.5 14.375V20H12.5V14.375H27.5ZM15.3125 10.625H24.6875C25.2673 10.6267 25.8323 10.8079 26.305 11.1436C26.7777 11.4793 27.1349 11.9531 27.3275 12.5H12.6725C12.8651 11.9531 13.2223 11.4793 13.695 11.1436C14.1677 10.8079 14.7327 10.6267 15.3125 10.625ZM12.5 26.5625V21.875H27.5009L27.5019 26.5625H12.5Z"
        fill={line}
      />
    </svg>
  );
};

export default BusMedium;
