import { CardContent, CardContentProps } from "@mui/material"

interface CardBodyProps extends CardContentProps {
  padding?: string
}

const CardBody = ({ padding, style, ...props }: CardBodyProps) => {
  return <CardContent style={{ padding: padding || "0 16px", ...style }} {...props} data-testid="card-body" />
}

export default CardBody
