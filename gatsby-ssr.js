import React from 'react'
import { renderToString } from 'react-dom/server'

// @layouts
import RootLayout from '@Layouts/root'

import wrappers from '@Utilities/wrappers'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

const sheetByPathname = new Map()

// WORKING SEO, REPLACE RENDERER
export const replaceRenderer = ({
    bodyComponent,
    replaceBodyHTMLString,
    setHeadComponents,
}) => {
    const sheet = new ServerStyleSheet()

    const App = () => (
        <StyleSheetManager sheet={sheet.instance}>
          {bodyComponent}
        </StyleSheetManager>
    )
    replaceBodyHTMLString(renderToString(<App />))
    setHeadComponents([sheet.getStyleElement()])
}

// WORKING STYLED COMPONENTS
// export const wrapRootElement = ({ element, pathname }) => {
//     const sheet = new ServerStyleSheet()
//     sheetByPathname.set(pathname, sheet)
//     return <StyleSheetManager sheet={sheet.instance}>{wrappers}</StyleSheetManager>
// }

// export const onRenderBody = ({ setHeadComponents, pathname }) => {
//     const sheet = sheetByPathname.get(pathname)
//     if (sheet) {
//       setHeadComponents([sheet.getStyleElement()])
//       sheetByPathname.delete(pathname)
//     }
// }



