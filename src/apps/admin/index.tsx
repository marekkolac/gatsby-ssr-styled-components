import React from 'react'
import { Router, RouteComponentProps } from '@reach/router'

// @providers
import { ThemeProvider } from 'styled-components'

// @themes
import AppTheme from '@Root/configurations/themes/app'

// @views
import Dashboard from './views/dashboard'

// @layouts
import AppLayout from '@Layouts/app'

const AdminApp: React.FC<RouteComponentProps> = () => {
  return (
    <ThemeProvider theme={AppTheme}>
      <AppLayout>
        <Router>
          <Dashboard path="@admin/dashboard" />
        </Router>
      </AppLayout>
    </ThemeProvider>
  )
}

export default AdminApp