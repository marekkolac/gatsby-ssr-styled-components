import { createGlobalStyle } from 'styled-components'

// @types
import { ITheme } from '@Themes/types'

export default createGlobalStyle``

/*
export default createGlobalStyle<{theme: ITheme}>`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  *:before {
    box-sizing: border-box;
  }
  *:after {
    box-sizing: border-box;
  }
  html {
    font-family: ${({ theme }) => theme.typography.textFont};
    font-size: ${({ theme }) => theme.typography.base.xxl.size}px;
    line-height: ${({ theme }) => theme.typography.base.xxl.lineHeight};
    font-weight: ${({ theme }) => theme.typography.base.xxl.weight};
    text-size-adjust: 100%;
    font-style: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-variant-east-asian: normal;
    font-stretch: normal;
    font-kerning: normal;
    font-feature-settings: "kern", "liga", "clig", "calt";

    @media(max-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
      font-size: ${({ theme }) => theme.typography.base.xl.size}px;
      line-height: ${({ theme }) => theme.typography.base.xl.lineHeight};
      font-weight: ${({ theme }) => theme.typography.base.xl.weight};
    }

    @media(max-width: ${({ theme }) => `${theme.breakpoints.lg}px`}) {
      font-size: ${({ theme }) => theme.typography.base.lg.size}px;
      line-height: ${({ theme }) => theme.typography.base.lg.lineHeight};
      font-weight: ${({ theme }) => theme.typography.base.lg.weight};
    }

    @media(max-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
      font-size: ${({ theme }) => theme.typography.base.md.size}px;
      line-height: ${({ theme }) => theme.typography.base.md.lineHeight};
      font-weight: ${({ theme }) => theme.typography.base.md.weight};
    }

    @media(max-width: ${({ theme }) => `${theme.breakpoints.sm}px`}) {
      font-size: ${({ theme }) => theme.typography.base.sm.size}px;
      line-height: ${({ theme }) => theme.typography.base.sm.lineHeight};
      font-weight: ${({ theme }) => theme.typography.base.sm.weight};
    }

    @media(max-width: ${({ theme }) => `${theme.breakpoints.xs}px`}) {
      font-size: ${({ theme }) => theme.typography.base.xs.size}px;
      line-height: ${({ theme }) => theme.typography.base.xs.lineHeight};
      font-weigth: ${({ theme }) => theme.typography.base.xs.weight};
    }
  }
  body {
    background: #f7f7f7;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  main,
  menu,
  nav,
  section,
  summary {
    display: block
  }
  audio,
  canvas,
  progress,
  video {
    display: inline-block
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -.25em;
  }
  sup {
    top: -.5em;
  }
  img {
    border-style: none;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    font: inherit;
    margin: 0;
    outline: 0;
  }
  img {
    max-width: 100%;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.typography.headlineFont};
    text-rendering: optimizeLegibility;
  }
  h1 {
    font-size: ${({ theme }) => theme.typography.h1.xxl.size}em;
    font-weight: ${({ theme }) => theme.typography.h1.xxl.weight};
    line-height: ${({ theme }) => theme.typography.h1.xxl.lineHeight};

    @media(max-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
      font-size: ${({ theme }) => theme.typography.h1.xl.size}em;
      font-weight: ${({ theme }) => theme.typography.h1.xl.weight};
      line-height: ${({ theme }) => theme.typography.h1.xl.lineHeight};
    }

    @media(max-width: ${({ theme }) => `${theme.breakpoints.lg}px`}) {
      font-size: ${({ theme }) => theme.typography.h1.lg.size}em;
      font-weight: ${({ theme }) => theme.typography.h1.lg.weight};
      line-height: ${({ theme }) => theme.typography.h1.lg.lineHeight};
    }

    @media(max-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
      font-size: ${({ theme }) => theme.typography.h1.md.size}em;
      font-weight: ${({ theme }) => theme.typography.h1.md.weight};
      line-height: ${({ theme }) => theme.typography.h1.md.lineHeight};
    }

    @media(max-width: ${({ theme }) => `${theme.breakpoints.sm}px`}) {
      font-size: ${({ theme }) => theme.typography.h1.sm.size}em;
      font-weight: ${({ theme }) => theme.typography.h1.sm.weight};
      line-height: ${({ theme }) => theme.typography.h1.sm.lineHeight};
    }

    @media(max-width: ${({ theme }) => `${theme.breakpoints.xs}px`}) {
      font-size: ${({ theme }) => theme.typography.h1.xs.size}em;
      font-weight: ${({ theme }) => theme.typography.h1.xs.weight};
      line-height: ${({ theme }) => theme.typography.h1.xs.lineHeight};
    }
  }
  h2 {
    font-size: ${({ theme }) => theme.typography.h2.xxl.size}em;
    font-weight: ${({ theme }) => theme.typography.h2.xxl.weight};
    line-height: ${({ theme }) => theme.typography.h2.xxl.lineHeight};

    @media(max-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
      font-size: ${({ theme }) => theme.typography.h2.xl.size}em;
      font-weight: ${({ theme }) => theme.typography.h2.xl.weight};
      line-height: ${({ theme }) => theme.typography.h2.xl.lineHeight};
    }

    @media(max-width: ${({ theme }) => `${theme.breakpoints.lg}px`}) {
      font-size: ${({ theme }) => theme.typography.h2.lg.size}em;
      font-weight: ${({ theme }) => theme.typography.h2.lg.weight};
      line-height: ${({ theme }) => theme.typography.h2.lg.lineHeight};
    }

    @media(max-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
      font-size: ${({ theme }) => theme.typography.h2.md.size}em;
      font-weight: ${({ theme }) => theme.typography.h2.md.weight};
      line-height: ${({ theme }) => theme.typography.h2.md.lineHeight};
    }

    @media(max-width: ${({ theme }) => `${theme.breakpoints.sm}px`}) {
      font-size: ${({ theme }) => theme.typography.h2.sm.size}em;
      font-weight: ${({ theme }) => theme.typography.h2.sm.weight};
      line-height: ${({ theme }) => theme.typography.h2.sm.lineHeight};
    }

    @media(max-width: ${({ theme }) => `${theme.breakpoints.xs}px`}) {
      font-size: ${({ theme }) => theme.typography.h2.xs.size}em;
      font-weight: ${({ theme }) => theme.typography.h2.xs.weight};
      line-height: ${({ theme }) => theme.typography.h2.xs.lineHeight};
    }
  }
  h3 {
    font-size: ${({ theme }) => theme.typography.h3.xxl.size}em;
    font-weight: ${({ theme }) => theme.typography.h3.xxl.weight};
    line-height: ${({ theme }) => theme.typography.h3.xxl.lineHeight};

    @media(max-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
      font-size: ${({ theme }) => theme.typography.h3.xl.size}em;
      font-weight: ${({ theme }) => theme.typography.h3.xl.weight};
      line-height: ${({ theme }) => theme.typography.h3.xl.lineHeight};
    }

    @media(max-width: ${({ theme }) => `${theme.breakpoints.lg}px`}) {
      font-size: ${({ theme }) => theme.typography.h3.lg.size}em;
      font-weight: ${({ theme }) => theme.typography.h3.lg.weight};
      line-height: ${({ theme }) => theme.typography.h3.lg.lineHeight};
    }

    @media(max-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
      font-size: ${({ theme }) => theme.typography.h3.md.size}em;
      font-weight: ${({ theme }) => theme.typography.h3.md.weight};
      line-height: ${({ theme }) => theme.typography.h3.md.lineHeight};
    }

    @media(max-width: ${({ theme }) => `${theme.breakpoints.sm}px`}) {
      font-size: ${({ theme }) => theme.typography.h3.sm.size}em;
      font-weight: ${({ theme }) => theme.typography.h3.sm.weight};
      line-height: ${({ theme }) => theme.typography.h3.sm.lineHeight};
    }

    @media(max-width: ${({ theme }) => `${theme.breakpoints.xs}px`}) {
      font-size: ${({ theme }) => theme.typography.h3.xs.size}em;
      font-weight: ${({ theme }) => theme.typography.h3.xs.weight};
      line-height: ${({ theme }) => theme.typography.h3.xs.lineHeight};
    }
  }
  h4 {
    font-size: ${({ theme }) => theme.typography.h4.xxl.size}em;
    font-weight: ${({ theme }) => theme.typography.h4.xxl.weight};
    line-height: ${({ theme }) => theme.typography.h4.xxl.lineHeight};

    @media(max-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
      font-size: ${({ theme }) => theme.typography.h4.xl.size}em;
      font-weight: ${({ theme }) => theme.typography.h4.xl.weight};
      line-height: ${({ theme }) => theme.typography.h4.xl.lineHeight};
    }

    @media(max-width: ${({ theme }) => `${theme.breakpoints.lg}px`}) {
      font-size: ${({ theme }) => theme.typography.h4.lg.size}em;
      font-weight: ${({ theme }) => theme.typography.h4.lg.weight};
      line-height: ${({ theme }) => theme.typography.h4.lg.lineHeight};
    }

    @media(max-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
      font-size: ${({ theme }) => theme.typography.h4.md.size}em;
      font-weight: ${({ theme }) => theme.typography.h4.md.weight};
      line-height: ${({ theme }) => theme.typography.h4.md.lineHeight};
    }

    @media(max-width: ${({ theme }) => `${theme.breakpoints.sm}px`}) {
      font-size: ${({ theme }) => theme.typography.h4.sm.size}em;
      font-weight: ${({ theme }) => theme.typography.h4.sm.weight};
      line-height: ${({ theme }) => theme.typography.h4.sm.lineHeight};
    }

    @media(max-width: ${({ theme }) => `${theme.breakpoints.xs}px`}) {
      font-size: ${({ theme }) => theme.typography.h4.xs.size}em;
      font-weight: ${({ theme }) => theme.typography.h4.xs.weight};
      line-height: ${({ theme }) => theme.typography.h4.xs.lineHeight};
    }
  }
  h5 {
    font-size: ${({ theme }) => theme.typography.h5.xxl.size}em;
    font-weight: ${({ theme }) => theme.typography.h5.xxl.weight};
    line-height: ${({ theme }) => theme.typography.h5.xxl.lineHeight};

    @media(max-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
      font-size: ${({ theme }) => theme.typography.h5.xl.size}em;
      font-weight: ${({ theme }) => theme.typography.h5.xl.weight};
      line-height: ${({ theme }) => theme.typography.h5.xl.lineHeight};
    }

    @media(max-width: ${({ theme }) => `${theme.breakpoints.lg}px`}) {
      font-size: ${({ theme }) => theme.typography.h5.lg.size}em;
      font-weight: ${({ theme }) => theme.typography.h5.lg.weight};
      line-height: ${({ theme }) => theme.typography.h5.lg.lineHeight};
    }

    @media(max-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
      font-size: ${({ theme }) => theme.typography.h5.md.size}em;
      font-weight: ${({ theme }) => theme.typography.h5.md.weight};
      line-height: ${({ theme }) => theme.typography.h5.md.lineHeight};
    }

    @media(max-width: ${({ theme }) => `${theme.breakpoints.sm}px`}) {
      font-size: ${({ theme }) => theme.typography.h5.sm.size}em;
      font-weight: ${({ theme }) => theme.typography.h5.sm.weight};
      line-height: ${({ theme }) => theme.typography.h5.sm.lineHeight};
    }

    @media(max-width: ${({ theme }) => `${theme.breakpoints.xs}px`}) {
      font-size: ${({ theme }) => theme.typography.h5.xs.size}em;
      font-weight: ${({ theme }) => theme.typography.h5.xs.weight};
      line-height: ${({ theme }) => theme.typography.h5.xs.lineHeight};
    }
  }
  h6 {
    font-size: ${({ theme }) => theme.typography.h6.xxl.size}em;
    font-weight: ${({ theme }) => theme.typography.h6.xxl.weight};
    line-height: ${({ theme }) => theme.typography.h6.xxl.lineHeight};

    @media(max-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
      font-size: ${({ theme }) => theme.typography.h6.xl.size}em;
      font-weight: ${({ theme }) => theme.typography.h6.xl.weight};
      line-height: ${({ theme }) => theme.typography.h6.xl.lineHeight};
    }

    @media(max-width: ${({ theme }) => `${theme.breakpoints.lg}px`}) {
      font-size: ${({ theme }) => theme.typography.h6.lg.size}em;
      font-weight: ${({ theme }) => theme.typography.h6.lg.weight};
      line-height: ${({ theme }) => theme.typography.h6.lg.lineHeight};
    }

    @media(max-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
      font-size: ${({ theme }) => theme.typography.h6.md.size}em;
      font-weight: ${({ theme }) => theme.typography.h6.md.weight};
      line-height: ${({ theme }) => theme.typography.h6.md.lineHeight};
    }

    @media(max-width: ${({ theme }) => `${theme.breakpoints.sm}px`}) {
      font-size: ${({ theme }) => theme.typography.h6.sm.size}em;
      font-weight: ${({ theme }) => theme.typography.h6.sm.weight};
      line-height: ${({ theme }) => theme.typography.h6.sm.lineHeight};
    }

    @media(max-width: ${({ theme }) => `${theme.breakpoints.xs}px`}) {
      font-size: ${({ theme }) => theme.typography.h6.xs.size}em;
      font-weight: ${({ theme }) => theme.typography.h6.xs.weight};
      line-height: ${({ theme }) => theme.typography.h6.xs.lineHeight};
    }
  }
  ul, ol {
    list-style-type: none;
    list-style-image: none;
    list-style-position: inside;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  b, strong {
    font-weight: bold;
  }
`
*/