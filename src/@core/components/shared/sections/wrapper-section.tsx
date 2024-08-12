import { Box, styled, useMediaQuery } from "@mui/material";
import { WIDTH_MEDIUM, WIDTH_BIG_LARGE } from "@/@core/configs";
import { ReactNode } from "react";

const StyleWrapper = styled(Box)(({theme}) => ({
    flexGrow: 1,
    width: '100%',
    transition: 'padding .25s ease-in-out',
    padding: theme.spacing(0),
    paddingBottom: '0',
    [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
        paddingLeft: '0 !important',
        paddingRight: '0 !important'
    },
    [theme.breakpoints.down('sm')]: {
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
        paddingBottom: '1rem'
    },
    [theme.breakpoints.up('md')]: {
        marginBottom: '0'
    },
    [theme.breakpoints.down('sm')]: {
        paddingBottom: '0 !important'
    }
}))

type WrapperProps = {
    children: ReactNode,
    bg: string,
    maxWidth: any,
    nameClass?: string
}

const Wrapper = ({children, bg , maxWidth, nameClass}: WrapperProps) => {
    const isDesktop = useMediaQuery((theme: any) => theme.breakpoints.up('xlc'))

    return (
        <StyleWrapper
            sx={{
                mx: 'auto',
                px: !isDesktop ? [4, 4] : [0, 0],
                backgroundColor: bg,
                '@media (min-width:1440px)': { maxWidth: maxWidth },
                '@media (min-width:1200px)': { maxWidth: '100%' }
            }}
            className={nameClass}
        >
            {children}
        </StyleWrapper>
    )
}

Wrapper.defaultProps = {
    maxWidth: WIDTH_BIG_LARGE,
    bg: '#fff'
}

export default Wrapper