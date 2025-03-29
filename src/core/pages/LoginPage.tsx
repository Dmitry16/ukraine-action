import { useEffect, useState } from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"

import { FormattedMessage, injectIntl } from "react-intl"
import { login, appSignIn } from "../store/auth/authSlice"
import { setVertical } from "../store/vertical/appSlice"

import { TenantResult, MultiTenantResult } from "../services/auth/AuthService"

import * as Yup from "yup"
import { Field } from "formik"

import { Stack, Typography, useTheme } from "@mui/material"

import AuthService from "../services/AuthService"
import { Card, CardBody, CardHeader, Button, Input, Logo } from "../../lib/partials"
import { BUTTON_SIZE, BUTTON_TYPE, INPUT_SIZE } from "../../lib/enums/partials.enum"
import { LOGIN } from "../../lib/constants/auth"
import Form from "../../lib/components/Form"

// import { useAppContext } from "../context/AppContext"
// import { RootState } from "../store" // Ensure this is your Redux state type

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email(LOGIN.VALIDATION_MESSAGES.WRONG_EMAIL_FORMAT)
    .required(LOGIN.VALIDATION_MESSAGES.EMAIL_REQUIRED),
  password: Yup.string().required(LOGIN.VALIDATION_MESSAGES.PASSWORD_REQUIRED),
})

const initialValues = {
  email: "",
  password: "",
}

function isMultiTenantResult(response: any): response is MultiTenantResult {
  return response && typeof response === "object" && "multipleTenants" in response
}

// const USE_LOGIN = import.meta.env.VITE_USE_LOGIN === "true"

const LoginPage = () => {
  const theme = useTheme()
  const dispatch = useDispatch()
  // const { loadVertical } = useAppContext()

  // const isLoggedin = USE_LOGIN ? useSelector((state: any) => state.auth?.user?.isLoggedin) : true

  // const { vertical } = useSelector((state: any) => {
  //   return {
  //       vertical: state.app?.vertical
  //   }
  // }, shallowEqual)

  const [loading, setLoading] = useState(false)
  const [snackBarOpen, setSnackBarOpen] = useState(false)
  const [customerSelection, setCustomerSelection] = useState<TenantResult[] | undefined>(undefined)
  const [passwordIsVisible, setPasswordIsVisible] = useState(false)

  // useEffect(() => {
  //   if (!isLoggedin) return

  //   if (!vertical) {
  //     const assignedVertical = AuthService.getCustomerVertical()
  //     // loads vertical and adds it to the app context
  //     loadVertical(assignedVertical)

  //     assignedVertical && dispatch(setVertical({ vertical: assignedVertical }))
  //   }

  // }, [isLoggedin, vertical, loadVertical])

  return (
    <Card sx={{ width: "512px", padding: "0 61px 60px", margin: "20px 0" }}>
      <Logo />
      <CardHeader>
        <Typography align="center" fontWeight={"500"} variant="H3" color={theme.utilitarian.neutrals.slate}>
          {LOGIN.TITLE}
        </Typography>
      </CardHeader>
      <CardBody sx={{ marginTop: "23px" }} padding="0">
        <Form
          initialValues={initialValues}
          validationSchema={validationSchema}
          enableReinitialize={true}
          onSubmit={(values, {}) => {
            dispatch(appSignIn(values))
          }}
        >
          <Stack direction="column" spacing={3}>
            <Field component={Input} name={LOGIN.FORM_FIELDS_NAMES.EMAIL} placeholder={LOGIN.FORM_FIELDS_PLACEHOLDERS.EMAIL} inputsize={INPUT_SIZE.BIG} fullWidth />
            <Field type="password" component={Input} name={LOGIN.FORM_FIELDS_NAMES.PASSWORD} placeholder={LOGIN.FORM_FIELDS_PLACEHOLDERS.PASSWORD} fullWidth inputsize={INPUT_SIZE.BIG} />
          </Stack>
          <Button type="submit" label={LOGIN.FORM_BUTTONS_LABELS.LOGIN} buttonsize={BUTTON_SIZE.BIG} fullWidth style={{ margin: "35px 0 10px" }} />
          <Button type="button" label={LOGIN.FORM_BUTTONS_LABELS.FORGOT_PASSWORD} buttontype={BUTTON_TYPE.SECONDARY} buttonsize={BUTTON_SIZE.BIG} fullWidth />
        </Form>
      </CardBody>
    </Card>
  )
}

export default LoginPage
