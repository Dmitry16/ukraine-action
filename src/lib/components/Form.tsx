import React from 'react'
import { Formik, Form as FormikForm, FormikConfig, FormikProps } from 'formik'
import { Box, BoxProps } from '@mui/material'

interface FormProps<T> extends Omit<FormikConfig<T>, 'children'> {
  children: React.ReactNode | ((formikContext: FormikProps<T>) => React.ReactNode)
  formProps?: BoxProps
}

const Form = <T extends Record<string, unknown>>({ 
  children, 
  formProps,
  ...formikProps 
}: FormProps<T>) => {
  return (
    <Formik {...formikProps}>
      {(formikContext) => (
        <Box component={FormikForm} {...formProps}>
          {typeof children === 'function' ? children(formikContext) : children}
        </Box>
      )}
    </Formik>
  )
}

export default Form