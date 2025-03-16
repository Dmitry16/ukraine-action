import { Routes, Route } from "react-router"

import LoginPage from "../pages/LoginPage"
import AuthPage from "../pages/AuthPage"

export function AppRoutes() {
  return (
      <Routes>
        <Route element={<AuthPage />}>
          <Route path="/" element={<LoginPage />} />
        </Route>
      </Routes>
  )
}
