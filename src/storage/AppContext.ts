import React from 'react'
import { AppContextProps } from './types/types'

const AppContext = React.createContext<AppContextProps>({} as AppContextProps)

export default AppContext
