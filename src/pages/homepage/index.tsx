import React from 'react'
import { Link } from 'gatsby'

// @styles
import { Page } from './_styles'

// @types
import { IProps } from './_types'

// @utilities
import SEO from '@Utilities/seo'

const Homepage: React.FC<IProps> = () => {
  return (
    <>
      <SEO page="homepage" />
      <Page>
        <h1>APPLICATION HOMEPAGE</h1>
        <Link to="test-page">go to test page</Link>
      </Page>
    </>
  )
}

// @bundle
export * from './_types'
export * from './_styles'
export default Homepage