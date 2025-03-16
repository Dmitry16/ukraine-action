import { Radio as MuiRadio, RadioProps, styled } from "@mui/material"

const CustomRadio = styled(MuiRadio)(({ theme }) => ({
    padding: 2,
    color: theme.utilitarian.neutrals.lightSlate,
    "&.Mui-checked": {
      color: theme.colors.primary.clearBlue
    },
    "&.Mui-disabled": {
        color: '#D6D9E1'
    },
    "&.Mui-checked.Mui-disabled": {
        color: '#D6D9E1'
    }
}))

const Radio = ({ ...props }: RadioProps) => {
  return <CustomRadio size={props.size || "small"} {...props} />;
};

export default Radio