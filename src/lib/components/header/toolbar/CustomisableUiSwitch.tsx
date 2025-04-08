import { ChangeEvent, useState } from "react"
import theme from "@/lib/theme/theme"
import { useDispatch, useSelector } from "react-redux"

import { setVertical } from "@/core/store/vertical/appSlice"

import Switch from "@/lib/partials/controls/switch/Switch"

const CustomisableUiSwitch = () => {
    const dispatch = useDispatch()

    const value = useSelector((state: any) => state.app?.vertical)

    const handleChange = (e: any) => {
        dispatch(setVertical({ vertical: e.target.value }))
    }
  
    return (
        <Switch
            value={value}
            onChange={handleChange}
        />
    )
}

export default CustomisableUiSwitch
