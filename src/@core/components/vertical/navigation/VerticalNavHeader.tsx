import Link from "next/link";
import { Box, IconButton, Typography, Badge, Avatar, styled, useTheme } from "@mui/material";
import { useAuth } from "@/infra/hooks/useAuth";

import CircleOutline from 'mdi-material-ui/CircleOutline'
import RecordCircleOutline from 'mdi-material-ui/RecordCircleOutline'

const MenuHeaderWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: theme.spacing(4.5),
    transition: 'padding .25s ease-in-out',
    backgroundColor: theme.palette.primary.main,
    minHeight: theme.mixins.toolbar.minHeight,
    '.MuiTypography-root': {
      color: '#fff'
    }
}))

const BadgeContentSpan = styled('span')(({ theme }) => ({
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: theme.palette.success.main,
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
}))

type VerticalNavHeaderProps = {
    navHover?: any,
    settings?: any,
    collapsedNavWidth?: any,
    navigationBorderWidth?: any,
    menuLockedIcon?: any,
    menuUnlockedIcon?: any,
    verticalNavMenuBranding?: any,
}

const VerticalNavHeader = (props: VerticalNavHeaderProps) => {
    const {
        navHover,
        settings,
        collapsedNavWidth,
        navigationBorderWidth,
        verticalNavMenuBranding: userVerticalNavMenuBranding
    } = props

    const { navCollapsed } = settings

    const menuHeaderPaddingLeft = () => {
        if (navCollapsed && !navHover) {
          if (userVerticalNavMenuBranding) {
            return 0
          } else {
            return (collapsedNavWidth - navigationBorderWidth - 30) / 8
          }
        } else {
          return 6
        }
    }

    return (
        <MenuHeaderWrapper className="nav-header" sx={{ pl: menuHeaderPaddingLeft() }}>
        {userVerticalNavMenuBranding ? (
            userVerticalNavMenuBranding(props)
        ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', padding: '0' }}>
                <Badge
                    overlap='circular'
                    badgeContent={<BadgeContentSpan />}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                    }}
                >
                    <Avatar alt='John Doe' src='/images/avatars/1.png' sx={{ width: '3rem', height: '3rem' }} />
                </Badge>
                <Box sx={{ display: 'flex', ml: 3, alignItems: 'flex-start', flexDirection: 'column' }}>
                    <Typography variant='body2' sx={{ fontSize: '0.8rem', color: 'text.disabled' }}>Admin</Typography>
                </Box>
            </Box>
        )}
        </MenuHeaderWrapper>
    )
}

export default VerticalNavHeader