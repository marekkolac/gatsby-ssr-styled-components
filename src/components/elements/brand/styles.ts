import styled from 'styled-components'

// @mixins
import Gradient from '@Mixins/gradient'

// ${({ theme }) => Gradient(theme.colors.complementary, theme.colors.secondary, 80)};
export const Element = styled.div`
  font-size: 1.4em;
  display: inline;
  padding-right: 0.5em;
  font-weight: 600;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
`