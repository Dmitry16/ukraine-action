import { CardActions  as MuiCardFooter, CardActionsProps, styled } from "@mui/material"

const StyledCardFooter = styled(MuiCardFooter)(() => ({
  backgroundColor: 'transparent'
}))

const CardFooter = ({ children, ...props }: CardActionsProps) => {
  return (
    <StyledCardFooter data-testid="card-footer" {...props}>
      {children}
    </StyledCardFooter>
  );
};

export default CardFooter
