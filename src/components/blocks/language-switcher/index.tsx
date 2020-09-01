import React from 'react'
import { useIntl, changeLocale } from 'gatsby-plugin-intl'

// @styles
import { Block } from './styles'

// @types
import { IProps } from './types'

// @assets
import {
  CzechRepublic,
  UnitedKingdom,
} from '@Flags/index'

const LanguageSwitcher: React.FC<IProps> = () => {
  const { locale } = useIntl()

  return (
    <Block>
      <UnitedKingdom
        isActive={locale === 'en' ? true : false}
        onClick={() => changeLocale('')}
      />
      <CzechRepublic
        isActive={locale === 'cs' ? true : false}
        onClick={() => changeLocale('cs')}
      />
    </Block>
  )
}

// @bundle
export * from './types'
export * from './styles'
export default LanguageSwitcher