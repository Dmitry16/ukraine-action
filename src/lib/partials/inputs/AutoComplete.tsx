import { FieldProps, FormikProps } from "formik";
import { INPUT_SIZE } from "../../enums/partials.enum";
import { Autocomplete as MuiAutocomplete, AutocompleteProps } from "@mui/material";
import { CustomTextField } from "./Input";
import { CustomLabel } from "./Input";
import { useTheme } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";

type CustomAutocompleteProps = Omit<AutocompleteProps<any, false, false, false>, 'renderInput'> & {    
    options: any[];
    id?: string;
    placeholder: string;
    field?: FieldProps["field"];
    form?: FormikProps<any>;
    required?: boolean;
    error?: boolean;
    helperText?: string;
    inputsize?: INPUT_SIZE;
    label?: string;
};
  
const AutoComplete = ({options, id, placeholder, field, form, inputsize = INPUT_SIZE.BIG, label, error, helperText, ...props}: CustomAutocompleteProps) => {
    const theme = useTheme();
  
    const isRequired = props.required || (field?.name && form?.errors[field?.name]);
    const isError = error || (form?.touched[field?.name || ""] && Boolean(form?.errors[field?.name || ""]))
    const isHelperText = inputsize == INPUT_SIZE.BIG ? helperText || (form?.touched[field?.name || ""] &&  form?.errors[field?.name || ""] && String(form?.errors[field?.name || ""]) || "") : ""

    return (
      <>
        {
          label && <CustomLabel htmlFor={id}>{label} {isRequired && <span style={{ color: theme.utilitarian.red[80] }}>*</span>} </CustomLabel>
        }
      <MuiAutocomplete 
        options={options}
        renderInput={(params) => (
          <CustomTextField
            {...params}
            {...field}
            inputsize={inputsize}
            placeholder={placeholder}
            error={isError}
            helperText={isHelperText}
          />
        )}
       popupIcon={props.popupIcon || <KeyboardArrowDown />}
       {...props}
      />
      </>
    )
}

export default AutoComplete;