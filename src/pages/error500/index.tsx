import React from 'react'

// @styles
import { Page } from './_styles'

// @types
import { IProps } from './_types'

const Error500: React.FC<IProps> = () => {
  return (
    <Page>
      <h1>500 page</h1>
    </Page>
  )
}

// @bundle
export * from './_types'
export * from './_styles'
export default Error500