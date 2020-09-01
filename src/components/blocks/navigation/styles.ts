import styled from 'styled-components'
import { Link as LinkElement } from 'gatsby-plugin-intl'

// @mixins
import Link from '@Mixins/link'

export const Block = styled.nav``

// ${({ theme }) => Link(theme.colors.light)};
export const Element = styled(LinkElement)`
  font-size: 0.8em;
  font-weight: 600;
  text-transform: uppercase;
  padding: 0px 15px;
`