import {
  Divider,
  Typography,
  ListSubheader,
  styled,
  useTheme,
} from "@mui/material";
import Translations from "../../translations";
import CanViewNavSectionTitle from "@/@core/acl/CanViewNavSectionTitle";
import { PropsWithChildren } from "react";

const MuListSubheader = styled((props: PropsWithChildren) => (
  <ListSubheader component="li" {...props}>
    {props.children}
  </ListSubheader>
))(({ theme }) => ({
  lineHeight: 1,
  display: "flex",
  position: "static",
  marginTop: theme.spacing(7),
  marginBottom: theme.spacing(2),
  backgroundColor: "transparent",
}));

const TypographyHeaderText = styled(Typography)(({ theme }) => ({
  fontSize: "0.75rem",
  lineHeight: "normal",
  letterSpacing: "0.21px",
  textTransform: "uppercase",
  color: theme.palette.text.disabled,
  fontWeight: theme.typography.fontWeightMedium,
}));

type NavSectionProps = {
  item?: any;
  navHover?: any;
  settings?: any;
  collapsedNavWidth?: any;
  navigationBorderWidth?: any;
};

const VerticalNavSectionTitle = (props: NavSectionProps) => {
  const { item, navHover, settings, collapsedNavWidth, navigationBorderWidth } =
    props;
  const theme = useTheme();
  const { skin, navCollapsed } = settings;

  const conditionalStyling = () => {
    if (skin === "semi-dark" && theme.palette.mode === "light") {
      return {
        color: `rgba(${theme.palette.primary.dark}, 0.38)`,
        "& .MuiDivider-root:before, & .MuiDivider-root:after, & hr": {
          borderColor: `rgba(${theme.palette.primary.dark}, ${
            navCollapsed && !navHover ? 0.3 : 0.12
          })`,
        },
      };
    } else if (skin === "semi-dark" && theme.palette.mode === "dark") {
      return {
        color: `rgba(${theme.palette.primary.light}, 0.38)`,
        "& .MuiDivider-root:before, & .MuiDivider-root:after, & hr": {
          borderColor: `rgba(${theme.palette.primary.light}, ${
            navCollapsed && !navHover ? 0.3 : 0.12
          })`,
        },
      };
    } else {
      return {
        color: theme.palette.text.disabled,
        "& .MuiDivider-root:before, & .MuiDivider-root:after, & hr": {
          borderColor: `rgba(${theme.palette.primary.main}, ${
            navCollapsed && !navHover ? 0.3 : 0.12
          })`,
        },
      };
    }
  };

  return (
    <CanViewNavSectionTitle navTitle={item}>
      <MuListSubheader
        sx={{
          ...conditionalStyling(),
          ...(navCollapsed && !navHover
            ? {
                py: 3.5,
                pr: (collapsedNavWidth - navigationBorderWidth - 24) / 8 - 1,
                pl: (collapsedNavWidth - navigationBorderWidth - 24) / 8 + 0.25,
              }
            : { px: 0, py: 1.75 }),
        }}
      >
        <Divider
          textAlign="left"
          sx={{
            m: 0,
            lineHeight: "normal",
            ...(navCollapsed && !navHover
              ? { width: 22 }
              : {
                  width: "100%",
                  textTransform: "uppercase",
                  "&:before, &:after": { top: 7, transform: "none" },
                  "& .MuiDivider-wrapper": {
                    px: 2.5,
                    fontSize: "0.75rem",
                    letterSpacing: "0.21px",
                  },
                }),
          }}
        >
          {navCollapsed && !navHover ? null : (
            <TypographyHeaderText noWrap>
              <Translations text={item.sectionTitle} />
            </TypographyHeaderText>
          )}
        </Divider>
      </MuListSubheader>
    </CanViewNavSectionTitle>
  );
};

export default VerticalNavSectionTitle;
