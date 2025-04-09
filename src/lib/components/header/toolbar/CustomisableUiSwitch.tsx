import { ChangeEvent, useEffect, useState } from "react"
import theme from "@/lib/theme/theme"
import { useDispatch, useSelector } from "react-redux"

import { actions } from "@/core/store/ui/uiSlice"

import Switch from "@/lib/partials/controls/switch/Switch"

const CustomisableUiSwitch = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState(false)

    useEffect(() => {
        dispatch(actions.startCustomization(value))
    }, [value])

    // const value = useSelector((state: any) => state.app?.vertical)

    const handleChange = () => {
        setValue(!value)
        // dispatch(actions.startCustomization(value))
    }
  
    return (
        <Switch
            value={value}
            onChange={handleChange}
        />
    )
}

export default CustomisableUiSwitch
