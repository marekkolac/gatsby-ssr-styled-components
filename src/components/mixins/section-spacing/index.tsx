import { css } from 'styled-components'
export default () => css`line-height: 1em;`

/*import { css } from 'styled-components'

const paddingH = (value: number) => {
  return css`
    padding-left: ${value}px;
    padding-right: ${value}px;
  `
}

const paddingV = (value: string) => {
  return css`
    padding-top: ${value};
    padding-bottom: ${value};
  `
}

export default (
  xxl?: string,
  xl?: string,
  lg?: string,
  md?: string,
  sm?: string,
  xs?: string,
) => {
  return css`
    ${({ theme }) => paddingH(theme.sectionSpacing.xxl)};
    ${xxl ? paddingV(xxl) : null};

    @media(max-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
      ${({ theme }) => paddingH(theme.sectionSpacing.xl)};
      ${xl ? paddingV(xl) : null};
    }

    @media(max-width: ${({ theme }) => `${theme.breakpoints.lg}px`}) {
      ${({ theme }) => paddingH(theme.sectionSpacing.lg)};
      ${lg ? paddingV(lg) : null};
    }

    @media(max-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
      ${({ theme }) => paddingH(theme.sectionSpacing.md)};
      ${md ? paddingV(md) : null};
    }

    @media(max-width: ${({ theme }) => `${theme.breakpoints.sm}px`}) {
      ${({ theme }) => paddingH(theme.sectionSpacing.sm)};
      ${sm ? paddingV(sm) : null};
    }

    @media(max-width: ${({ theme }) => `${theme.breakpoints.xs}px`}) {
      ${({ theme }) => paddingH(theme.sectionSpacing.xs)};
      ${xs ? paddingV(xs) : null};
    }
  `
}
*/