import React from 'react'

// @styles
import { Block } from './styles'

// @types
import { IProps } from './types'

// @elements
import { default as LogoElement } from '@Elements/logo'
import Brand from '@Elements/brand'

const Logo: React.FC<IProps> = ({ children = 'App' }) => {
  return (
    <Block>
      <LogoElement />
      <Brand>{children}</Brand>
    </Block>
  )
}

// @bundle
export * from './types'
export * from './styles'
export default Logo