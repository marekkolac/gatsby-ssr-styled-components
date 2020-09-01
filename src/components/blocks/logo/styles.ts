import styled from 'styled-components'

// @elements
import { Element as Logo } from '@Elements/logo'
import { Element as Brand } from '@Elements/brand'

export const Block = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  ${Logo} {
    position: relative;
    top: 4px;
    opacity: 0.8;
    width: 37px;
    width: 2.056em;
  }

  ${Brand} {
    margin-left: 0.6em;
  }
`