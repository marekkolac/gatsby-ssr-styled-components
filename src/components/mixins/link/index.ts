import { css } from 'styled-components'

export default (color?: string) => {
  return css`
    ${color ? `color: ${color}` : null};
    text-decoration: none;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  `
}