import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { AppRoutes } from "./core/router/appRoutes"
import { AppProvider } from "./core/context/AppContext"
import store from "./core/store"

interface AppProps {
  store: typeof store
}

const App = ({store}: AppProps) => {
  return (
    <Provider store={store}>
      <AppProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AppProvider>
    </Provider>
  )
}

export default App
