export type Device = 'mobile' | 'desktop'

export interface AppState {
  session: {
    isLoggedIn: boolean,
  },
  error: {
    showError: boolean,
    errorType: null,
  },
  routeSnapshot: {
    currentPage: '/',
    prevPage: '',
  },
  viewportSize: "phone",
}

export interface AppContextProps {
  appState: AppState
  setIsLoggedIn: (isLoggedIn: boolean | null) => void
  setLoading: (loading: any | null) => void
}
