// ** MUI Imports
import Box from "@mui/material/Box";

// ** Config Import
import themeConfig from "@/infra/configs/themeConfig";

// ** Menu Components
import HorizontalNavItems from "./HorizontalNavItems";
import { PropsWithChildren } from "react";

const Navigation = (props: PropsWithChildren) => {
  return (
    <Box
      className="menu-content"
      sx={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        "& > *": {
          "&:not(:last-child)": { mr: 2 },
          ...(themeConfig.menuTextTruncate && { maxWidth: 220 }),
        },
      }}
    >
      <HorizontalNavItems {...props} />
    </Box>
  );
};

export default Navigation;
