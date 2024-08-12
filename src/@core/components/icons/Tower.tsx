import React, { FunctionComponent } from "react";

type TowerProps = {
  colorTxt?: string;
  colorBg?: string;
};

const Tower: FunctionComponent<TowerProps> = ({
  colorBg = "#F6D1D2",
  colorTxt = "#C1272D",
}) => {
  return (
    <svg
      width="68"
      height="52"
      viewBox="0 0 68 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="41.5" cy="26" r="26" fill={colorBg} />
      <g clipPath="url(#clip0_151_44)">
        <path
          d="M36 17H28V19H36V40H28V42H38V19C38 18.4696 37.7893 17.9609 37.4142 17.5858C37.0391 17.2107 36.5304 17 36 17Z"
          fill={colorTxt}
        />
        <path
          d="M24.88 12H11.12C10.5577 12 10.0185 12.2234 9.62093 12.6209C9.22336 13.0185 9 13.5577 9 14.12V42H27V14.12C27 13.5577 26.7766 13.0185 26.3791 12.6209C25.9815 12.2234 25.4423 12 24.88 12ZM25 40H22V37H14V40H11V14.12C11 14.1042 11.0031 14.0886 11.0091 14.0741C11.0152 14.0595 11.024 14.0463 11.0351 14.0351C11.0463 14.024 11.0595 14.0152 11.0741 14.0091C11.0886 14.0031 11.1042 14 11.12 14H24.88C24.8958 14 24.9114 14.0031 24.9259 14.0091C24.9405 14.0152 24.9537 14.024 24.9649 14.0351C24.976 14.0463 24.9848 14.0595 24.9909 14.0741C24.9969 14.0886 25 14.1042 25 14.12V40Z"
          fill={colorTxt}
        />
        <path d="M13 17H15V19H13V17Z" fill={colorTxt} />
        <path d="M17 17H19V19H17V17Z" fill={colorTxt} />
        <path d="M21 17H23V19H21V17Z" fill={colorTxt} />
        <path d="M13 22H15V24H13V22Z" fill={colorTxt} />
        <path d="M17 22H19V24H17V22Z" fill={colorTxt} />
        <path d="M21 22H23V24H21V22Z" fill={colorTxt} />
        <path d="M13 27H15V29H13V27Z" fill={colorTxt} />
        <path d="M17 27H19V29H17V27Z" fill={colorTxt} />
        <path d="M21 27H23V29H21V27Z" fill={colorTxt} />
        <path d="M13 32H15V34H13V32Z" fill={colorTxt} />
        <path d="M17 32H19V34H17V32Z" fill={colorTxt} />
        <path d="M21 32H23V34H21V32Z" fill={colorTxt} />
        <path d="M28 22H30V24H28V22Z" fill={colorTxt} />
        <path d="M32 22H34V24H32V22Z" fill={colorTxt} />
        <path d="M28 27H30V29H28V27Z" fill={colorTxt} />
        <path d="M32 27H34V29H32V27Z" fill={colorTxt} />
        <path d="M28 32H30V34H28V32Z" fill={colorTxt} />
        <path d="M32 32H34V34H32V32Z" fill={colorTxt} />
      </g>
      <defs>
        <clipPath id="clip0_151_44">
          <rect
            width="36"
            height="36"
            fill="white"
            transform="translate(5 9)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Tower;
