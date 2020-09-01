import styled from 'styled-components'

export const Flag = styled.div<{
  size?: number,
  maxSize?: number,
  isActive?: boolean,
}>`
  width: ${({ size }) => size}%;
  cursor: pointer;
  ${({ maxSize }) => maxSize ? `max-width: ${maxSize}px` : undefined};
  ${({ isActive }) => !isActive ? `
    opacity: 0.6;
    &:hover {
      opacity: 0.8;
    }
  ` : undefined}
`