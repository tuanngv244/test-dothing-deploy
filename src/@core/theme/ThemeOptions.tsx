// ** MUI Theme Provider
import { deepmerge } from '@mui/utils'

// ** User Theme Options
import UserThemeOptions from '../layouts/options/UserThemeOptions'

// ** Theme Override Imports
import palette from './palette'
import spacing from './spacing'
import shadows from './shadows'
import breakpoints from './breakpoints'

const themeOptions = (settings: any) => {
  // ** Vars
  const { skin, mode, direction, themeColor } = settings

  // ** Create New object before removing user component overrides and typography objects from userThemeOptions
  const userThemeConfig = Object.assign({}, UserThemeOptions())
  const userFontFamily = userThemeConfig.typography?.fontFamily

  const mergedThemeConfig = deepmerge(
    {
      direction,
      palette: palette(mode, skin, themeColor),
      typography: {
        fontFamily:
          userFontFamily ||
          [
            '"Pretendard Variable"',
            '"Pretendard"',
            'Inter',
            'sans-serif',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
          ].join(',')
      },
      shadows: shadows(mode),
      ...spacing,
      breakpoints: breakpoints(),
      shape: {
        borderRadius: 6
      },
      mixins: {
        toolbar: {
          minHeight: 84,
          minHeightCus: 104
        },
        header: {
          vertical: {
            minHeight: 80
          },
          horizontal: {
            minHeight: 104,
          }
        }
      }
    },
    userThemeConfig
  )

  return deepmerge(mergedThemeConfig, {
    palette: {
      primary: {
        //@ts-ignore
        ...mergedThemeConfig.palette[themeColor]
      }
    }
  })
}

export default themeOptions
