import { Card, CardContent, Typography } from "@mui/material"
import * as Yup from "yup"
import { Field } from "formik"
import { useTheme } from "@mui/material/styles"
import { BUTTON_SIZE, BUTTON_TYPE, INPUT_SIZE } from "../enums/partials.enum"
import { Search } from "@mui/icons-material"
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import { AutoComplete, Input, Button } from "../partials"
import Form from "./Form"


const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
  peoples: Yup.string().required("Select is required"),
})

const initialValues = {
	email: "",
	password: "",
	peoples: ""
}

const CardComponent = () => {
  const theme = useTheme();

  return (
    <Card sx={{ maxWidth: 400, mx: "auto", mt: 5, p: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="H3" align="center" color={theme.utilitarian.neutrals.slate} style={{marginBottom: "30px"}}>
          Login
        </Typography>
        <Form 
          initialValues={initialValues}
          validationSchema={validationSchema}
          enableReinitialize={true}
          onSubmit={(values, { resetForm }) => {
            console.log(values)
            // resetForm()
          }}>
          {({ setFieldValue }) => (
            <>
                <Field component={Input} name="email" placeholder="Enter e-mail" style={{marginBottom: "20px"}} inputsize={INPUT_SIZE.BIG} fullWidth />
                <Field type="password" component={Input} name="password" placeholder="Enter password" fullWidth  style={{marginBottom: "20px"}} inputsize={INPUT_SIZE.BIG}/>
                <Field 
                  name="peoples" 
                  component={AutoComplete}
                  options={[ { label: 'The Godfather', id: 1 },
                    { label: 'Pulp Fiction', id: 2 },]} 
                    getOptionLabel={(option: any) => option.label}
                  inputsize={INPUT_SIZE.BIG} 
                  placeholder="Select" 
                  onChange={(e: any, selectedOption: any) => {
                    setFieldValue('peoples', selectedOption ? selectedOption.label : '');
                  }}
                />
                <Button type="submit" label="Login" style={{margin: "20px 0"}} buttonsize={BUTTON_SIZE.BIG} fullWidth />
                <Button type="button" label="Forgot Password?" buttontype={BUTTON_TYPE.SECONDARY} buttonsize={BUTTON_SIZE.BIG} fullWidth style={{marginBottom: "20px"}}/>
            </>
          )}
        </Form>
          <br />
           {/* Normal AutoCompleted */}
           <AutoComplete label="Select" style={{marginBottom: "20px"}}
                options={[{ label: 'The Godfather', id: 1 },
                    { label: 'Pulp Fiction', id: 2 },]} id="peoples" placeholder="Select" inputsize={INPUT_SIZE.SMALL} error={true} helperText="This is an error" required />
          <Input placeholder="Search" fullWidth style={{marginBottom: "20px"}} inputsize={INPUT_SIZE.SMALL} startIcon={<GroupWorkIcon />} endIcon={<Search />} />
            
          {/* <Select
      value={value}
      displayEmpty
      input={<InputBase />}
      renderValue={(selected) => selected || "Select an option"}
      fullWidth
    >
      <MenuItem value="option1">Option 1</MenuItem>
      <MenuItem value="option2">Option 2</MenuItem>
      <MenuItem value="option3">Option 3</MenuItem>
    </Select> */}
      </CardContent>
    </Card>
  )
}

export default CardComponent
