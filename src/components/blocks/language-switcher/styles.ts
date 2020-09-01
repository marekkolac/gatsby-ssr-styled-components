import styled from 'styled-components'

// @styles
import { Flag } from '@Flags/styles'

export const Block = styled.div`
  width: 4em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-left: 1px solid black;
  height: 1.25em;
  padding-left: 0.8em;

  ${Flag} {
    width: 1.125em;
    height: 1.125em;
  }
`