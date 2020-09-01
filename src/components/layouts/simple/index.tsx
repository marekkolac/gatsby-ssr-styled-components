import React from 'react'

// @styles
import { Layout, Main } from './styles'

// @types
import { IProps } from './types'

// @sections
import { default as Header } from '@Sections/@headers/simple'

const SimpleLayout: React.FC<IProps> = ({ children }) => {
  return (
    <Layout>
      <Header />
      <Main>
        {children}
      </Main>
    </Layout>
  )
}

// @bundle
export * from './types'
export * from './styles'
export default SimpleLayout