import { css } from 'styled-components'

// @types
import { CssUnits } from '@Configurations/types'

export default (
  radius: number = 10,
  radiusUnit: CssUnits = 'px',
  padding: number = 20,
  paddingUnit: CssUnits = 'px',
) => {
  return css`
    width: 100%;
    padding: ${padding}${paddingUnit};
    background: rgb(255, 255, 255);
    box-shadow: rgba(255, 255, 255, 0.1) 0px 0px 0px 1px, rgba(14, 30, 37, 0.12) 0px 2px 4px 0px;
    border-radius: ${radius}${radiusUnit};
    margin-bottom: 4px;
  `
}