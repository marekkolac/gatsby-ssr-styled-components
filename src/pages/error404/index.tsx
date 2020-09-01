import React from 'react'

// @styles
import { Page } from './_styles'

// @types
import { IProps } from './_types'

const Error404: React.FC<IProps> = () => {
  return (
    <Page>
      <h1>custom 404 error page here</h1>
    </Page>
  )
}

// @bundle
export * from './_types'
export * from './_styles'
export default Error404