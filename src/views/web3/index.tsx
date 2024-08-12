import React from 'react'
import { Box, styled, useTheme } from '@mui/material'
import Wrapper from '@/@core/components/shared/sections/wrapper-section'
import MuiContainer from '@/@core/style-libs/mui-container'
import { WIDTH_MEDIUM } from '@/@core/configs'
import Title from './contents/Title'
import TabContents from './contents/tabs/TabContents'

const BoxWrapper = styled(MuiContainer)(({ theme }) => ({}))

type Web3ContentProps = {
    tab: string
}

const Web3Content = ({ tab }: Web3ContentProps) => {
  const theme = useTheme()
  return (
    <Wrapper bg={theme.palette.common.white} maxWidth={'100%'}>
        <BoxWrapper width={WIDTH_MEDIUM}>
            <Box sx={{ textAlign: 'center'}}>
                <Title />
            </Box>
            <TabContents tab={tab} />
        </BoxWrapper>
    </Wrapper>
  )
}

export default Web3Content