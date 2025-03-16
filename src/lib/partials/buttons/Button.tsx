import React from "react";
import { Button as MuiButton, ButtonProps, LinearProgress, styled, ThemeOptions } from "@mui/material";
import { BUTTON_TYPE, BUTTON_SIZE } from "../../enums/partials.enum";

export interface CustomButtonProps extends Omit<ButtonProps, "loading"> {
  label: string;
  buttontype?: BUTTON_TYPE;
  buttonsize?: BUTTON_SIZE;
  loading?: boolean;
  disableRipple?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const getButtonStyles = (theme: ThemeOptions) => ({
  primary: {
    backgroundColor: theme.colors?.primary?.clearBlue,
    color: theme.colors?.onPrimary,
    "&:hover": {
      backgroundColor: theme.colors?.primary?.royalBlue,
    },
    "&:active": {
      backgroundColor: theme.colors?.primary?.ambassadorBlue,
    },
    "&:disabled": {
      backgroundColor: theme?.utilitarian?.neutrals?.grey,
      color: theme?.utilitarian?.neutrals?.lightSlate,
    },
  },
  secondary: {
    backgroundColor: theme?.utilitarian?.gray?.[0],
    color: theme.colors?.onSecondary,
    border: `2px solid ${theme.colors?.primary?.clearBlue}`,
    "&:hover": {
      backgroundColor: theme?.navigation?.blue?.[0]
    },
    "&:active": {
      backgroundColor: theme?.navigation?.blue?.[1]
    },
    "&:disabled": {
      backgroundColor: theme?.utilitarian?.gray?.[0],
      color: theme?.utilitarian?.neutrals?.lightSlate,
      border: `2px solid ${theme?.utilitarian?.neutrals?.grey}`,
    }
  },
  tertiary: {
    backgroundColor: theme?.navigation?.blue?.[0],
    color: theme.colors?.onSecondary,
    "&:hover": {
      backgroundColor: theme?.navigation?.blue?.[2],
      color: theme.colors?.onPrimary
    },
    "&:active": {
      backgroundColor: theme.colors?.primary?.clearBlue,
      color: theme.colors?.onPrimary
    },
    "&:disabled": {
      backgroundColor: theme?.utilitarian?.neutrals?.grey,
      color: theme?.utilitarian?.neutrals?.lightSlate,
    },
  },
});

const StyledButton = styled(MuiButton)<{ buttontype: BUTTON_TYPE; buttonsize: BUTTON_SIZE }>(({ theme, buttontype, buttonsize }) => {
  const buttonStyles = getButtonStyles(theme)[buttontype];

  return {
    fontSize: buttonsize == BUTTON_SIZE.BIG ? '16px' : '14px',
    lineHeight: buttonsize == BUTTON_SIZE.BIG ? '24px' : '21px',
    padding: buttonsize == BUTTON_SIZE.BIG ? '10px 20px' : '5px 12px',
    borderRadius: "4px",
    fontWeight: 700,
    minWidth: buttonsize == BUTTON_SIZE.BIG ? '109px': '84px',
    boxShadow: 'none',
    ...buttonStyles,
  }
});

const Button: React.FC<CustomButtonProps> = ({ label, buttontype= BUTTON_TYPE.PRIMARY, buttonsize= BUTTON_SIZE.BIG, loading = false, disableRipple=true, onClick, ...props }) => {
  return (
    <StyledButton
      buttontype={buttontype} 
      buttonsize={buttonsize}
      disabled={loading} 
      variant={buttontype == BUTTON_TYPE.SECONDARY ? 'outlined' : 'contained'} 
      onClick={onClick} {...props} disableRipple={disableRipple}>
        { loading ? <LinearProgress style={{ width: '100%' }} /> : label}
    </StyledButton>
  );
};

export default Button;
