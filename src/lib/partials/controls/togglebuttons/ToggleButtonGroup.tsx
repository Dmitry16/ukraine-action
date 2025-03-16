import { ToggleButtonGroup as MuiToggleButtonGroup, styled, ToggleButtonGroupProps } from "@mui/material"

const CustomToggleButtonGroup = styled(MuiToggleButtonGroup)(({ theme }) => ({
  height: 44,
  borderRadius: 4,
  '& .MuiToggleButtonGroup-grouped': {
    color: theme.utilitarian.neutrals.lightSlate,
  },
}));

const ToggleButtonGroup = ({ ...props }: ToggleButtonGroupProps) => {
  return <CustomToggleButtonGroup {...props} />;
};

export default ToggleButtonGroup