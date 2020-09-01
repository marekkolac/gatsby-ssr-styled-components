import styled from 'styled-components'

// @mixins
import Card from '@Mixins/card'
import Gradient from '@Mixins/gradient'

export const Page = styled.div`
  width: 100%;
  height: 100vh;
`

export const CenterBlock = styled.div<{
  isBig?: boolean,
  isBold?: boolean,
}>`
  ${Card()};
  ${Gradient('#a8c0ff', '#3f2b96', 15, 0.9)};
  margin: 10px;
  width: 200px;
  height: 200px;

  color: ${({ isBig }) => isBig ? 'red' : 'green'};
  font-weight: ${({ isBold }) => isBold ? 'bold' : 'normal'};
`