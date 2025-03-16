import React, { useState } from 'react'
import { Grid, Box, Stack } from '@mui/system'
import { FormControlLabel, RadioGroup, Typography } from '@mui/material'

import { HeaderFeature } from './features/HeaderFeature'
import { TopRowInfoFeature } from './features/TopRowInfoFeature'
import { Checkbox, EventBubble, LiveSwitch, Pagination, Radio, SortButton, Switch, ToggleButton, ToggleButtonGroup, ZoomButton } from '@/lib/partials'

import MailIcon from "@mui/icons-material/Mail"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"
import SensorsOutlinedIcon from "@mui/icons-material/SensorsOutlined"
import DoneIcon from "@mui/icons-material/Done"
import RouterIcon from "@mui/icons-material/Router"

const Dashboard = () => {

  const [selectedToggleButton, setSelectedToggleButton] = useState<string | null>("web")
  const [selectedEventBubble, setSelectedEventBubble] = useState<string | null>("Option 1")
  const [selectedIconToggle, setSelectedIconToggle] = useState<boolean>(false)

  const handleToggleButton = (event: React.MouseEvent<HTMLElement>, newValue: string | null) => {
    if(newValue !== null) {
      setSelectedToggleButton(newValue)
    }
  }

  return (
    <Grid container spacing={2} flexDirection={"column"}>
      <HeaderFeature />

      <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%", height: "100px" }}>
        <Typography variant="H4">Healthcare Dashboard</Typography>
      </Box>

      <TopRowInfoFeature />
      <Stack alignItems={'start'} direction={'column'} sx={{ marginLeft: 2, marginBottom: 2 }} gap={2}>
        Zoom Button
        <ZoomButton onZoomIn={() => console.log('Zoom In')} onZoomOut={() => console.log('Zoom Out')} />
        Normal Switch
        <Switch />
        Icon Switch
        <Switch icon={<EmailOutlinedIcon />} checkedIcon={<MailIcon />} />
        Live Switch
        <LiveSwitch icon={<SensorsOutlinedIcon />} checkedIcon={<SensorsOutlinedIcon />}/>
        Toggle Button
        <ToggleButtonGroup value={selectedToggleButton} onChange={handleToggleButton} exclusive aria-label="Platform">
          <ToggleButton sx={{ width: '141px'}} value={'web'}>
              <DoneIcon sx={{ width: 22, height: 22, marginRight: 1 }} />
              <Typography sx={{ fontSize: 16, fontWeight: 700 }}>
                Button
              </Typography>
          </ToggleButton>
          <ToggleButton  sx={{width: '141px'}} value={'card'}>
              <DoneIcon sx={{ width: 22, height: 22, marginRight: 1 }} />
              <Typography sx={{ fontSize: 16, fontWeight: 700 }}>
                Button
              </Typography>
          </ToggleButton>
        </ToggleButtonGroup>
        Checkbox
        <FormControlLabel control={<Checkbox />} label={'Option 1'} />
        <FormControlLabel control={<Checkbox />} label={'Option 2'} />

        Radio Button
        <RadioGroup defaultValue={'first'}>
          <FormControlLabel value={'first'} label='Option 1' control={<Radio />} />
          <FormControlLabel value={'second'} label='Option 2' control={<Radio />} />
        </RadioGroup>

        Sort Button
        <SortButton onSort={(e, type) => console.log({type})} />

        Event Bubble
        <RadioGroup sx={{gap: 2}} value={selectedEventBubble} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSelectedEventBubble(e.target.value)}>
          <EventBubble text='Option 1' value={'Option 1'} checked={selectedEventBubble == 'Option 1'}></EventBubble>
          <EventBubble text='Option 2' value={'Option 2'} checked={selectedEventBubble == 'Option 2'}></EventBubble>
        </RadioGroup>

        Icon Toggle Button
        <ToggleButton value={'icon'} selected={selectedIconToggle} onChange={() => setSelectedIconToggle((prevSelected) => !prevSelected)}>
            <RouterIcon sx={{ width: 20, height: 20 }} />
        </ToggleButton>


        Pagination
        <Pagination count={100} />
      </Stack>
    </Grid>
  )
}

export default Dashboard
