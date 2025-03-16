import { ChangeEvent, useState } from "react"
import theme from "@/lib/theme/theme"
import { useDispatch, useSelector } from "react-redux"

import { setVertical } from "@/core/store/vertical/appSlice"

import { HeaderSelect } from "@/lib/partials"
import { HeaderSelectProps } from "@/lib/partials/inputs/HeaderSelect"

import AutorenewIcon from '@mui/icons-material/Autorenew'

const DEFAULT_ICON = <AutorenewIcon sx={{ width: "20px", height: "20px", marginBottom: '6px', color: theme.utilitarian.neutrals.slate }} />

const DEFAULT_VALUE = "construction"
  
const DEFAULT_OPTIONS = [
    { value: "construction", label: "Construction Vertical" },
    { value: "healthcare", label: "Healthcare Vertical" },
    { value: "education", label: "Education Vertical" },
] as const

const VerticalSelection = ({ icon, options, ...props }: HeaderSelectProps) => {
    const dispatch = useDispatch()

    const value = useSelector((state: any) => state.app?.vertical) || DEFAULT_VALUE

    const handleChange = (e: any) => {
        dispatch(setVertical({ vertical: e.target.value }))
    }
  
    return (
        <HeaderSelect
            value={value}
            onChange={props.onChange || handleChange}
            options={options || DEFAULT_OPTIONS}
            icon={icon || DEFAULT_ICON}
            {...props}
        />
    )
}

export default VerticalSelection
