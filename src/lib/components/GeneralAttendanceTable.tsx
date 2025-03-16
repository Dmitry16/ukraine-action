import { Typography, useTheme, Stack, Table, TableCell, TableRow, TableHead, TableBody } from "@mui/material"
import Button from "../partials/buttons/Button";
import { useCallback, useState } from "react";
import { BUTTON_SIZE, BUTTON_TYPE, INPUT_SIZE } from "../enums/partials.enum";
import { Card, CardBody, CardFooter, CardHeader, Input } from "../partials";
import { Search, CalendarMonth } from "@mui/icons-material";

const GeneralAttendanceTable = () => {
  const theme = useTheme()

  return (
    <Stack direction="column" gap={2} width={'100%'}>
    <Card style={{ margin: "20px 0", width: "100%" }}>
      <CardHeader title="Attendance List" subheader="List of people on site daily" action={
        <Stack direction="row" gap={1}>
          <Input style={{ width: '175px' }} placeholder="Date" inputsize={INPUT_SIZE.SMALL} endIcon={<CalendarMonth />} />
          <Input style={{ width: '168px' }} placeholder="Search" inputsize={INPUT_SIZE.SMALL} endIcon={<Search />} />
        </Stack>
      } />
      <CardBody padding="16px"> 
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Roles</TableCell>
              <TableCell>Company</TableCell>
              <TableCell>First Seen</TableCell>
              <TableCell>Last Seen</TableCell>
              <TableCell>Total Hours</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[1,2,3,4,5].map((_, index) => (
              <TableRow key={index}>
                <TableCell>John Doe</TableCell>
                <TableCell>Admin</TableCell>
                <TableCell>Company</TableCell>
                <TableCell>10:00 AM</TableCell>
                <TableCell>10:00 AM</TableCell>
                <TableCell>10:00 AM</TableCell>
                <TableCell>10:00 AM</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardBody>
    </Card>
    </Stack>
  )
}

export default GeneralAttendanceTable
