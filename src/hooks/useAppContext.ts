import { useContext } from 'react'

import AppContext from 'storage/AppContext'

export const useAppContext = () => {
  const { appState } = useContext(AppContext)

  return {
    appState,
  }
}
