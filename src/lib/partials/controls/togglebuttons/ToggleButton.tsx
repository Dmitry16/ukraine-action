import { ToggleButton as MuiToggleButton, styled, ToggleButtonProps } from "@mui/material"

const CustomToggleButton = styled(MuiToggleButton)(({ theme }) => ({
    '&.MuiToggleButton-root': {
        color: theme.utilitarian.neutrals.textPlaceHolder,
        backgroundColor: theme.utilitarian.gray[0],
        borderColor: theme.utilitarian.neutrals.lightSlate,
    '&.Mui-selected': {
        backgroundColor: theme.colors.primary.clearBlue,
        color: theme.utilitarian.gray[0],
    },
  }
}))

const ToggleButton = ({ ...props }: ToggleButtonProps) => {
  return <CustomToggleButton sx={{ padding: 0, minWidth: 30, minHeight: 30, ...props.sx }} {...props} />;
};

export default ToggleButton