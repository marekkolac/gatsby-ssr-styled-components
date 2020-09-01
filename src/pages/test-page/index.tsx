import React from 'react'

// @styles
import { Page } from './_styles'

// @types
import { IProps } from './_types'

// @utilities
import SEO from '@Utilities/seo'

// @layouts
import SimpleLayout from '@Layouts/simple'

// @constants
const PAGE = 'test-page'

const TestPage: React.FC<IProps> = () => {
  return (
    <SimpleLayout>
      <SEO page={PAGE} />
      <Page>
        <h1 style={{ color: 'black' }}>Example of testing page</h1>
        <p style={{ color: 'black' }}>lorem ipsum dolor sit amet</p>
      </Page>
    </SimpleLayout>
  )
}

// @bundle
export * from './_types'
export * from './_styles'
export default TestPage