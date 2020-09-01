import styled from 'styled-components'

// stop-color: ${({ theme }) => theme.colors.secondary};
// stop-color: ${({ theme }) => theme.colors.complementary};
export const Element = styled.div.attrs(props => ({
  className: `app-logo ${props.className ?? ''}`,
}))
<{
  size?: number,
  color?: string,
}>`
  width: 100%;
  ${({ size }) => size ? `max-width: ${size}px` : null};

  stop {
    &.secondary {
      stop-color: blue;
    }
    &.complementary {
      stop-color: red;
    }
  }
`