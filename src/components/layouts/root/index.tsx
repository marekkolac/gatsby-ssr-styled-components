import React from 'react'

// @styles
import GlobalStyles from './styles'

// @types
import { IProps } from './types'

const RootLayout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  )
}

export default RootLayout