// ** React Imports
import { forwardRef } from "react";
import MuiAvatar from "@mui/material/Avatar";
import { lighten, useTheme } from "@mui/material/styles";
import { Colors } from "@/domains/types/colors.type";

import useBgColor from "@/@core/hooks/useBgColor";

type AvatarProps = {
  sx?: any;
  src?: any;
  skin?: any;
  color?: any;
};

const Avatar = forwardRef<any, any>((props: AvatarProps, ref) => {
  const { sx, src, skin, color } = props;
  const theme = useTheme();
  const bgColors = useBgColor();

  const getAvatarStyles = (skin: any, skinColor: any) => {
    let avatarStyles;
    if (skin === "light") {
      avatarStyles = { ...bgColors[`${skinColor as Colors}Light`] };
    } else if (skin === "light-static") {
      avatarStyles = {
        color: bgColors[`${skinColor as Colors}Light`].color,
        backgroundColor: lighten(theme.palette[skinColor as Colors].main, 0.88),
      };
    } else {
      avatarStyles = { ...bgColors[`${skinColor as Colors}Filled`] };
    }

    return avatarStyles;
  };

  const colors = {
    primary: getAvatarStyles(skin, "primary"),
    secondary: getAvatarStyles(skin, "secondary"),
    success: getAvatarStyles(skin, "success"),
    error: getAvatarStyles(skin, "error"),
    warning: getAvatarStyles(skin, "warning"),
    info: getAvatarStyles(skin, "info"),
  };

  return (
    <MuiAvatar
      ref={ref}
      {...props}
      sx={
        !src && skin && color ? Object.assign(colors[color as Colors], sx) : sx
      }
    />
  );
});

Avatar.displayName = "Avatar";

export default Avatar;
