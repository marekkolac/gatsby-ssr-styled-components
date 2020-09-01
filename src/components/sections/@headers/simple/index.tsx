import React from 'react'

// @styles
import {
  Section,
  LogoHolder,
  NavigationHolder,
} from './styles'

// @types
import { IProps } from './types'

// @blocks
import Logo from '@Blocks/logo'
import LanguageSwitcher from '@Blocks/language-switcher'
import Navigation from '@Blocks/navigation'

// @assets
// import { HeaderArrow } from '@Svgs'

const Simple: React.FC<IProps> = () => {
  return (
    <Section>
      <LogoHolder>
        <Logo>Application</Logo>
        <LanguageSwitcher />
      </LogoHolder>
      <NavigationHolder>
        <Navigation />
      </NavigationHolder>
    </Section>
  )
}

export default Simple