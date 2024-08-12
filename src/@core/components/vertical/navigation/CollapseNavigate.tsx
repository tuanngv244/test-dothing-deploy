import { Collapse, styled, Box } from "@mui/material";
import VerticalNavigateContent from "./VerticalNavigateContent";

const CollapseNavigateStyle = styled(Box)(({ theme }) => ({
  width: "100%",
  position: 'fixed',
  background: '#fff',
  zIndex: 9999,
  top: ((theme: any) => theme.mixins.header.vertical.minHeight + 5)(theme),
  [theme.breakpoints.down("sm")]: {
    top: '120px'
  },
}));

type CollapseNavigateProps = {
    hidden?: any;
    settings?: any;
    afterVerticalNavMenuContent?: any;
    beforeVerticalNavMenuContent?: any;
    verticalNavMenuContent?: any;
    navHover?: any,
    navWidth?: any,
    navVisible?: any,
    setNavHover?: any,
    setNavVisible?: any,
    collapsedNavWidth?: any,
    toggleNavVisibility?: any,
    navigationBorderWidth?: any
};

const CollapseNavigate = (props: CollapseNavigateProps) => {
  const { navVisible } = props;

  return (
    <CollapseNavigateStyle>
      <Collapse orientation="vertical" in={navVisible}>
        <VerticalNavigateContent {...props} />
      </Collapse>
    </CollapseNavigateStyle>
  );
};

export default CollapseNavigate;
