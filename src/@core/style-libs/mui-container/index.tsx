// ** MUI imports
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

const MuiContainer = styled(Box)(({ theme, width }) => {
    return {
        marginLeft: 'auto',
        marginRight: 'auto',
        ['@media (min-width: '+ width +'px)']: { width: width + 'px !important', maxWidth: 'none !important' },
        ['@media (max-width: '+ (width as number - 1) +'px)']: { width: '100% !important', maxWidth: 'none !important' }
    }
})

export default MuiContainer