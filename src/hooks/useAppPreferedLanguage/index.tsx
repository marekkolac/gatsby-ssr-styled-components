// todo: fix types for useLocalStorage - should be accepting 'cs' | 'en' | ... others

// @hooks
import useLocalStorage from '@Hooks/useLocalStorage'

const useAppPreferedLanguage = () => {
  const [ lang, setLang ] = useLocalStorage('APP_PREFERED_LANGUAGE', '')

  return {
    lang,
    setLang,
  }
}

export default useAppPreferedLanguage