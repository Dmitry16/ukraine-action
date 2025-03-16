import { CardHeader as MuiCardHeader, CardHeaderProps, styled, Box, SxProps } from "@mui/material"

const StyledCardHeader = styled(MuiCardHeader)(({ theme }) => ({
  "& .MuiCardHeader-subheader": {
    color: theme.utilitarian.neutrals.lightSlate,
    fontSize: '13px',
    lineHeight: '20.8px',
    fontWeight: 400,
  },
  "& .MuiCardHeader-title": {
    color: theme.utilitarian.neutrals.dark,
    fontWeight: 600,
    ...theme.typography.XL,
  },
}))

const HeaderWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

interface CustomCardHeaderProps extends CardHeaderProps {
  children?: React.ReactNode,
  icon?: React.ReactNode,
  wrapperSx?: SxProps,
}

const CardHeader = ({ title, subheader, children, action, icon, wrapperSx, ...props }: CustomCardHeaderProps) => {
  return (
    <HeaderWrapper sx={wrapperSx} data-testid="card-header">
      {title && (
        <StyledCardHeader 
          title={title} 
          subheader={subheader} 
          action={action}
          avatar={icon || props.avatar}
          sx={props.sx}
          {...props} 
        />
      )}
      {children && (
        <Box>
          {children}
        </Box>
      )}
    </HeaderWrapper>
  );
}

export default CardHeader