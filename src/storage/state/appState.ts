import { AppState } from "storage/types/types"

const INITIAL_APP_STATE: AppState = {
  session: {
    isLoggedIn: false,
  },
  error: {
    showError: false,
    errorType: null,
  },
  routeSnapshot: {
    currentPage: '/',
    prevPage: '',
  },
  viewportSize: "phone",
}

export default INITIAL_APP_STATE
