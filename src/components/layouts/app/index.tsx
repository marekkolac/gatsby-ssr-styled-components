import React, { useContext } from 'react'
import { Link } from 'gatsby'

// @styles
import { Layout, Sidebar, Content } from './styles'

// @types
import { IProps } from './types'

// @contexts
import { AppContext } from '@Contexts/app'

const AppLayout: React.FC<IProps> = ({ children }) => {
  const { setLang } = useContext(AppContext)

  return (
    <Layout>
      <Sidebar>
        <h3>sidebar</h3>
        <p><Link to="/@admin/dashboard">dashboard</Link></p>
        <br />
        <br />
        <br />
        <div onClick={() => setLang('cs')}>lang</div>
        <br />
        <div onClick={() => setLang('')}>lang</div>
      </Sidebar>
      <Content>
        {children}
      </Content>
    </Layout>
  )
}

// @bundle
export * from './types'
export * from './styles'
export default AppLayout