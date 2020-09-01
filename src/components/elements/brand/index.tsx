import React from 'react'

// @styles
import { Element } from './styles'

// @types
import { IProps } from './types'

const Brand: React.FC<IProps> = ({ children, id, className, style }) => (
  <Element
    id={id}
    className={className}
    style={style}
  >
    {children}
  </Element>
)

// @bundle
export * from './types'
export * from './styles'
export default Brand