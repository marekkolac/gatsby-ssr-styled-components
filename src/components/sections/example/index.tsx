import React from 'react'

// @styles
import { Section } from './styles'

// @types
import { IProps } from './types'

const ExampleSection: React.FC<IProps> = ({ id }) => {
  return (
    <Section>
      <p>content of my section</p>
    </Section>
  )
}

// @bundle
export * from './styles'
export * from './types'
export default ExampleSection