import { useDispatch } from "react-redux"

import { Button } from "@/lib/partials"
import { CustomButtonProps } from "@/lib/partials/buttons/Button"

import { BUTTON_SIZE, BUTTON_TYPE } from "@/lib/enums/partials.enum"
import { logout as logoutAction } from "@/core/store/auth/authSlice"

const SIGN_OUT = {
  BUTTON_LABEL: "Sign Out",
}

const SignOut = ({ onClick, sx, label, buttontype, buttonsize, ...props }: CustomButtonProps) => {
  const dispatch = useDispatch()

  const DEFAULT_BUTTON_CLICK_HANDLER = () => {
      console.log("Signing out...")
      dispatch(logoutAction())
  }

  return (
    <Button
      label={label || SIGN_OUT.BUTTON_LABEL}
      buttontype={buttontype || BUTTON_TYPE.TERTIARY}
      buttonsize={buttonsize || BUTTON_SIZE.SMALL}
      sx={{ height: "31px", width: "94px", ...sx }}
      onClick={onClick || DEFAULT_BUTTON_CLICK_HANDLER}
      {...props}
    />
  )
}

export default SignOut
