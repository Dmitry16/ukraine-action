import { Checkbox as MuiCheckbox, CheckboxProps, styled } from "@mui/material"

const CustomCheckbox = styled(MuiCheckbox)(({ theme }) => ({
    color: theme.utilitarian.neutrals.textPlaceHolder,
    padding: 2,
    "&.Mui-checked": {
        color: theme.colors.primary.clearBlue
    },
    "&.Mui-disabled": {
        color: theme.utilitarian.neutrals.grey
    },
    "&.Mui-checked.Mui-disabled": {
        color: theme.utilitarian.neutrals.grey
    }
}))

const Checkbox = ({ ...props }: CheckboxProps) => {
  return <CustomCheckbox size={props.size || "small"} {...props} />;
};

export default Checkbox