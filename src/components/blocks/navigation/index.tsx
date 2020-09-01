import React from 'react'

// @styles
import { Block, Element } from './styles'

// @types
import { IProps } from './types'

// @utilities
import { getPageMenu } from './utils'

const Navigation: React.FC<IProps> = ({ menu }) => {
  const nav = menu ?? getPageMenu('homepage')

  return (
    <Block>
      {nav?.map(item => (
        <Element to={`/${item.path}`}>{item.name}</Element>
      ))}
    </Block>
  )
}

// @bundle
export * from './types'
export * from './styles'
export * from './utils'
export default Navigation
