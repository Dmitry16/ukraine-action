import { Card as MuiCard, CardProps, styled } from "@mui/material"
import { CardBody } from "../index"

const StyledCard = styled(MuiCard)(({ theme }) => ({
  borderRadius: '5px',
  boxShadow: '0px 0px 6px 2px #0000001A',
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.utilitarian.gray[0]
}))

const Card = ({ children, sx, ...props }: CardProps) => {
  return <StyledCard sx={sx} {...props} data-testid="card">
    { children ? children : <CardBody /> }
  </StyledCard>
}

export default Card