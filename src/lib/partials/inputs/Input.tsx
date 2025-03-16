import React, { useState } from "react";
import { Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";
import { TextFieldProps, TextField, styled, InputLabel, useTheme, IconButton, InputAdornment } from "@mui/material";
import { FieldProps, FormikProps } from "formik";
import { INPUT_SIZE, ARIA_LABEL, INPUT_POSITION } from "../../enums/partials.enum";

type CustomTextFieldProps = {
    id?: string;
    placeholder: string;
    label?: string;
    success?: boolean;
    name?: string;
    value?: string | number;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    field?: FieldProps["field"];
    form?: FormikProps<any>;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    inputsize?: INPUT_SIZE;
} & TextFieldProps;

export const CustomTextField = styled(TextField)<CustomTextFieldProps>(({ theme, error, success, inputsize }) => ({
    "& .MuiInputBase-input::placeholder": {
        color: theme.utilitarian.neutrals.textPlaceHolder,
        opacity: 1
    },
    "& .MuiAutocomplete-inputRoot": {
            padding: '11px 30px 11px 11px'
    },
    "& .MuiOutlinedInput-root": {
        paddingRight: "0",
        "& fieldset": {
            border: error
                ? `1px solid ${theme.utilitarian.red[80]}`
                : success
                    ? `1px solid ${theme.utilitarian.green[60]}`
                    : "none"
        },
        "&:hover fieldset": {
            border: error
                ? `1px solid ${theme.utilitarian.red[80]}`
                : success
                    ? `1px solid ${theme.utilitarian.green[60]}`
                    : "none"
        },
        "&.Mui-focused fieldset": {
            border: error
                ? `1px solid ${theme.utilitarian.red[80]}`
                : success
                    ? `1px solid ${theme.utilitarian.green[60]}`    
                    : "none"
        },
    },
    "& .MuiInputBase-root": {
        padding: inputsize === INPUT_SIZE.BIG ? "11px !important" : "8px 11px !important",
        background: theme.utilitarian.gray[5],
        color: theme.utilitarian.neutrals.slate,
        height: inputsize === INPUT_SIZE.BIG ? "auto" : "34px"
    },
    "& .MuiOutlinedInput-input": {
        padding: "0 !important",
        fontSize: inputsize === INPUT_SIZE.BIG ? "16px" : "13px",
        lineHeight: inputsize === INPUT_SIZE.BIG ? "25.6px" : "22.1px",
        fontWeight: "500",
        borderRadius: "4px"
    },
    "& .MuiFormHelperText-root": {
        marginLeft: "0",
        fontSize: "13px",
        fontWeight: "500", 
        lineHeight: "22.1px",
        color: error
            ? `${theme.utilitarian.red[80]} !important`
            : success
                ? `${theme.utilitarian.green[60]} !important`
                : `${theme.utilitarian.neutrals.slate} !important`
    },
    "& .MuiIconButton-root": {
        padding: "0",
    },
    "& .MuiSvgIcon-root": {
        fontSize: '20px',
        color: theme.utilitarian.neutrals.lightSlate
    }
}));

export const CustomLabel = styled(InputLabel)(({ theme }) => {
    return {
        fontSize: "13px",
        fontWeight: "500",
        lineHeight: "22.1px",
        color: theme.utilitarian.neutrals.slate,
    };
});

const Input = ({ 
    placeholder, 
    label, 
    id,
    name,
    value,
    onChange,
    onBlur,
    field,
    form,
    startIcon,
    endIcon,
    inputsize = INPUT_SIZE.BIG,
    ...props 
}: CustomTextFieldProps) => {
    const theme = useTheme();

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const isRequired = props.required || (field?.name && form?.errors[field?.name])
    const error = props?.error || (form?.touched[field?.name || ""] && Boolean(form?.errors[field?.name || ""]))
    const helperText = inputsize == INPUT_SIZE.BIG ? props?.helperText || (form?.touched[field?.name || ""] &&  form?.errors[field?.name || ""] && String(form?.errors[field?.name || ""]) || "") : ""

    return (
        <>
            {
                label && <CustomLabel htmlFor={id}>{label} {isRequired && <span style={{ color: theme.utilitarian.red[80] }}>*</span>} </CustomLabel>
            } 
            <CustomTextField
                autoComplete="off"
                id={id}
                name={name || id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                {...field}
                {...props}
                inputsize={inputsize}
                type={props?.type === "password" ? (showPassword ? "text" : "password") : props?.type}
                slotProps={{
                    input: {
                        endAdornment: endIcon ? <InputAdornment position={INPUT_POSITION.END}>{endIcon}</InputAdornment> : props?.type === "password" ? (
                            <InputAdornment position={INPUT_POSITION.END}>
                                 <IconButton
                                    aria-label={
                                        showPassword ? ARIA_LABEL.HIDE_PASSWORD : ARIA_LABEL.DISPLAY_PASSWORD
                                    }
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    onMouseUp={handleMouseUpPassword}
                                    edge={INPUT_POSITION.START}
                                    >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ) : null,
                        startAdornment: startIcon ? <InputAdornment position={INPUT_POSITION.START}>{startIcon}</InputAdornment> : null
                    }
                }}
                error={error}
                helperText={helperText}
            />
        </>
    );
};

export default Input;