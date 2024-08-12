import React from "react";
import { styled, keyframes, Theme, useTheme } from "@mui/material";

type IconLoadingProps = {
  width?: number;
  height?: number;
  borderWidth?: number;
  color?: string;
};

const rotate = keyframes`
    0% { transform: translate(-50%, -50%) rotate(0deg);}
    100% { transform: translate(-50%, -50%) rotate(360deg);}
`;

const Wrapper = styled("div")(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  zIndex: 999,
  top: 0,
  left: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Loading = styled("div")(
  ({
    theme,
    width = 20,
    height = 20,
    borderWidth = 3,
    color = "#0066FF",
  }: {
    theme: Theme;
    width: number;
    height: number;
    borderWidth: number;
    color: string;
  }) => ({
    position: "absolute",
    width: width,
    height: height,
    border: borderWidth + "px solid " + color,
    borderTopColor: "transparent",
    borderRadius: "50%",
    animation: rotate + " 1s linear infinite",
    left: "50%",
    top: "50%",
  })
);

const IconLoading = ({
  width = 20,
  height = 20,
  borderWidth = 3,
  color = '#0066FF',
}: IconLoadingProps) => {
  const theme = useTheme();
  return (
    <Wrapper className="loading-spinner">
      <Loading
        width={width}
        height={height}
        borderWidth={borderWidth}
        color={color}
        theme={theme}
      />
    </Wrapper>
  );
};

export default IconLoading;
