import { Routes, Route } from "react-router"

import LoginPage from "../pages/LoginPage"
import HomePage from "../pages/HomePage"
import AuthPage from "../pages/AuthPage"

export function AppRoutes() {
  return (
      <Routes>
        <Route element={<AuthPage />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
  )
}
