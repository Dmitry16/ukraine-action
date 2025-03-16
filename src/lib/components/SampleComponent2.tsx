import { CardContent, Typography, Stack, Box, useTheme } from "@mui/material"
import { Card, CardBody, CardFooter, CardHeader, Input } from "../partials";

import { Button } from "../partials"
import { BUTTON_SIZE, BUTTON_TYPE } from "../enums/partials.enum"

const CardComponent = () => {
    const theme = useTheme()
  
  return (
    // <Card sx={{ maxWidth: 400, mx: "auto", mt: 5, p: 2, boxShadow: 3 }}>
    //   <CardContent>
    //     <Typography variant="h5" color="primary" gutterBottom>
    //       Sample Component 2
    //     </Typography>
    //     <Typography variant="body1" sx={{ mb: 2 }}>
    //       This is a placeholder component using Material UI.
    //     </Typography>
    //   </CardContent>
    // </Card>
    <Card sx={{ width: 'auto', height: 'auto', display: 'flex', flexDirection: 'column' }}>
    <CardHeader title="Total Role Occupancy" subheader="Daily number of contracted workers" action={
      <Stack direction="column" gap={1}>
        <Stack direction="row" gap={1}>
          <span style={{ backgroundColor: theme.navigation.blue[1], width: '15px', height: '15px', borderRadius: '50%' }}></span>
          <Typography variant="XS">Absent workers</Typography>
        </Stack>
        <Stack direction="row" gap={1}>
          <span style={{ backgroundColor: '#5591F3', width: '15px', height: '15px', borderRadius: '50%' }}></span>
          <Typography variant="XS">Active workers</Typography>
        </Stack>
      </Stack>
    } />
    <CardBody padding="0 16px" sx={{ flex: 1 }}>
        <Box sx={{ width: '100%', height: '100%', backgroundColor: theme.colors.primary.clearBlue }}></Box>
    </CardBody>
    <CardFooter>
      <Stack direction="row" gap={1} padding={'0 10px'} width={'100%'} justifyContent={'flex-end'}>
        <Button label="View All" buttontype={BUTTON_TYPE.SECONDARY} buttonsize={BUTTON_SIZE.SMALL} />
        <Button label="Submit" buttontype={BUTTON_TYPE.PRIMARY} buttonsize={BUTTON_SIZE.SMALL} />
      </Stack>
    </CardFooter>
  </Card>
  )
}

export default CardComponent
