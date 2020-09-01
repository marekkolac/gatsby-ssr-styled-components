import React, { createContext } from 'react'

// @Hooks
import useAppPreferedLanguage from '@Hooks/useAppPreferedLanguage'

interface IProps {
  children: React.ReactNode
}

const AppContext = createContext<any>('')
const AppProvider: React.FC<IProps> = ({ children }) => {
  const { lang, setLang } = useAppPreferedLanguage()

  return (
    <AppContext.Provider value={{
      lang,
      setLang,
    }}>
      {children}
    </AppContext.Provider>
  )
}

const AppConsumer = AppContext.Consumer

export {
  AppContext,
  AppProvider,
  AppConsumer,
}
