interface ITypographyUnit {
  size: number
  lineHeight: number
  weight: number
}

interface ITypographySet {
  xxl: ITypographyUnit
  xl: ITypographyUnit
  lg: ITypographyUnit
  md: ITypographyUnit
  sm: ITypographyUnit
  xs: ITypographyUnit
}

export interface ITypography {
  headlineFont: string
  textFont: string
  base: ITypographySet
  h1: ITypographySet
  h2: ITypographySet
  h3: ITypographySet
  h4: ITypographySet
  h5: ITypographySet
  h6: ITypographySet
}