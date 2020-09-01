// @types
import { IBreakpoints } from './breakpoints/types'
import { IColors } from './colors/types'
import { ITypography } from './typography/types'

export interface ITheme {
  breakpoints: IBreakpoints
  colors: IColors
  typography: ITypography
}