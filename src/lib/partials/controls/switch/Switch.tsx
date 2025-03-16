import { styled, Switch as MuiSwitch, SwitchProps } from "@mui/material"

const CustomStyleSwitch = styled((props: SwitchProps) => (
    <MuiSwitch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      backgroundColor: '#FFFFFF',
      height: 22,
      width: 22,
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&:hover': {
            backgroundColor: '#FFFFFF',
        },
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.colors.primary.clearBlue,
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
        '& .MuiSvgIcon-root': {
            color: theme.colors.primary.clearBlue,
        },
        '&:hover': {
            backgroundColor: '#FFFFFF',
        }
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color: '#FFFFFF',
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        backgroundColor: '#D6D9E1',
        opacity: 1,
      },
      '&.Mui-disabled.Mui-checked + .MuiSwitch-track': {
        opacity: 0.4,
        backgroundColor: theme.utilitarian.neutrals.lightSlate,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
      boxShadow: '0px 3px 8px 0px #00000026',
      color: '#FFFFFF',
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: '#D6D9E1',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
    '& .MuiSvgIcon-root': {
        color: theme.utilitarian.neutrals.slate,
        height: 15,
        width: 15,
    }
}))

const Switch = ({ ...props }: SwitchProps) => {
  return <CustomStyleSwitch {...props} />;
};  

export default Switch


