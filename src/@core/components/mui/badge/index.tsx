// ** MUI Imports
import MuiBadge from "@mui/material/Badge";

// ** Hooks Imports
import useBgColor from "@/@core/hooks/useBgColor";
import { Colors } from "@/domains/types/colors.type";

type BadgeProps = {
  sx?: any;
  skin?: any;
  color?: any;
};

const Badge = (props: BadgeProps) => {
  // ** Props
  const { sx, skin, color } = props;

  // ** Hook
  const bgColors = useBgColor();

  const colors = {
    primary: { ...bgColors.primaryLight },
    secondary: { ...bgColors.secondaryLight },
    success: { ...bgColors.successLight },
    error: { ...bgColors.errorLight },
    warning: { ...bgColors.warningLight },
    info: { ...bgColors.infoLight },
  };

  return (
    <MuiBadge
      {...props}
      sx={
        skin === "light" && color
          ? Object.assign({ "& .MuiBadge-badge": colors[color as Colors] }, sx)
          : sx
      }
    />
  );
};

export default Badge;
