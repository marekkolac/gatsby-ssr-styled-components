import { css } from 'styled-components'
import convert from 'color-convert'

export default (
  color1: string,
  color2: string,
  degree: number = 135,
  opacity: number = 1,
) => {
  const angle = `${degree}deg`
  const firstColor = convert.hex.rgb(color1.replace('#', ''))
  const secondColor = convert.hex.rgb(color2.replace('#', ''))

  color1 = `rgba(${firstColor[0]}, ${firstColor[1]}, ${firstColor[2]}, ${opacity})`
  color2 = `rgba(${secondColor[0]}, ${secondColor[1]}, ${secondColor[2]}, ${opacity})`

  return css`
    background: linear-gradient(${angle}, ${color1}, ${color2});
  `
}