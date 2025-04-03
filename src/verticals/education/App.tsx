import { Suspense, useEffect } from "react"
import { useSelector, useDispatch, shallowEqual } from "react-redux"

import { RootState } from "@/core/store"
import { useConfig } from "@/core/config/hooks/useConfig"

import { Layout } from "@/core/types/uiTypes"

import { actions } from "@/core/store/ui/uiSlice"

import Dashboard from "./pages/DashboardPage"

const EducationApp = () => {
  const space = useSelector((state: RootState) => state.ui?.space, shallowEqual)
  const user = useSelector((state: RootState) => state.auth?.user, shallowEqual)
  const layout = useSelector((state: RootState) => state.ui?.space?.layout, shallowEqual)

  const dispatch = useDispatch()

  console.log("EducationApp:::space:::", space)
  console.log("EducationApp:::user:::", user)

  useEffect(() => {
    if (space || !user) return

    dispatch(actions.setSpace({ space: {
      id: user.id,
      name: user.username ? user.username : user.email,
    }}))
  }, [space])

  let layoutConfig

  if (space?.layout) {
    layoutConfig = space?.layout
  } else {
    layoutConfig = useConfig("education")

    // console.log("EducationApp:::layoutConfig:::", layoutConfig)
  }

  function isLayout(value: any): value is Layout {
    // return typeof value?.id === 'string'
    return true
  }

  
  useEffect(() => {
    if (layout) return

    isLayout(layoutConfig) && dispatch(actions.setLayout({ layout: layoutConfig }))
  
  }, [layout])

  return (
    <Suspense fallback={<p>Loading Education Dashboard...</p>}>
      <Dashboard />
    </Suspense>
  )
}

export default EducationApp
