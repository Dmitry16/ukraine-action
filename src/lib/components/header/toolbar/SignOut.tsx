// import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'

import { Button } from "@/lib/partials"
import { CustomButtonProps } from "@/lib/partials/buttons/Button"

import { BUTTON_SIZE, BUTTON_TYPE } from "@/lib/enums/partials.enum"
import { appSignIn, logout } from "@/core/store/auth/authSlice"

const SIGN_IN= "Sign In"
const SIGN_OUT = "Sign Out"

const SignOut = ({ onClick, sx, label, buttontype, buttonsize, ...props }: CustomButtonProps) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const isLoggedin = useSelector((state: any) => state.auth?.user?.isLoggedin)

  // const [isLoggedin, setIsLoggedin] = useState(auth?.user?.isLoggedin)
  // const [labelText, setLabelText] = useState(label || SIGN_OUT)

  // console.log("SignOut:::isLoggedin:::", isLoggedin)

  const handleClick = () => {
    console.log("Signing out...")
    if (isLoggedin) {
      navigate('/')
      dispatch(logout())
    } else {
      navigate('/login')
    }
  }

  return (
    <Button
      label={isLoggedin ? SIGN_OUT : SIGN_IN}
      buttontype={buttontype || BUTTON_TYPE.TERTIARY}
      buttonsize={buttonsize || BUTTON_SIZE.SMALL}
      sx={{ height: "31px", width: "94px", ...sx }}
      onClick={onClick || handleClick}
      {...props}
    />
  )
}

export default SignOut
