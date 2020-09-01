import React from 'react'

// @providers
import { ThemeProvider } from 'styled-components'

// @themes
import AppTheme from '@Root/configurations/themes/app'

// @layouts
import RootLayout from '@Layouts/root'

export default ({ element }) => (
  <>
    <ThemeProvider theme={AppTheme}>
      <RootLayout>
        {element}
      </RootLayout>
    </ThemeProvider>
  </>
)