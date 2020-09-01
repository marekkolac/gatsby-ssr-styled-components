import { useIntl } from 'gatsby-plugin-intl'

// @types
import { IMenuLink } from './types'
import { Pages } from '@Types/index'

// @Translations
import enMsg from '@Translations/en.json'
import csMsg from '@Translations/cs.json'

export const getPageMenu = (page: Pages) => {
  const { locale } = useIntl()

  const menus = 'menus'
  const menu = 'menu'

  const resolver = () => {
    let targetedPage: any
    let targetedMenu: any
    const where = 'pages'

    switch (locale) {
      case 'cs':
        targetedPage = csMsg[where][page]
        targetedMenu = targetedPage[menu]
        return targetedMenu
      case 'en':
      default:
        targetedPage = enMsg[where][page]
        targetedMenu = targetedPage[menu]
        return targetedMenu
    }
  }

  let menuId: string
  const targetedMenu = resolver()

  if (targetedMenu) {
    const arrayTarget = targetedMenu.split('#')
    if (arrayTarget.length > 0) menuId = arrayTarget[2]
  }

  if (menuId) {
    switch (locale) {
      case 'cs':
        return getLinks(csMsg[menus][menuId])
      case 'en':
      default:
        return getLinks(enMsg[menus][menuId])
    }
  }

  return undefined
}

export const getLinks = (menu: {}) => {
  const menuItems: IMenuLink[] | undefined = []

  for (const [key, value] of Object.entries(menu)) {
    const val: string = value as string
    menuItems.push({
      path: key,
      name: val,
    })
  }

  return menuItems
}