import { Box, Stack, Typography, useTheme } from "@mui/material";
import { useSelector } from "react-redux";

import { AVATAR_SIZE, BUTTON_SIZE } from "@/lib/enums/partials.enum";
import { Avatar, Button, Card, CardBody, CardFooter } from "@/lib/partials"
import { ChevronRightSvgIcon, EmailOutlined, LocationFilledSvgIcon, PhoneOutlined } from "@/lib/partials/icons/icons";
import ActionIcon, { IconButtonsProps } from "./utils/ActionIcon";

import PersonIcon from "@mui/icons-material/Person";
import DetailCard from "./utils/DetailCard";
import { peopleandAssetsDummyData } from "@/lib/mock-data/info-popups";

const iconSize = { '& .MuiSvgIcon-root': {
    height: '15.5px',
    width: '15.5px'
} }

const DEFAULT_ICON_BUTTONS: IconButtonsProps[] = [
    {
        icon: <Avatar variant="square" size={AVATAR_SIZE.SMALL} sx={iconSize}><EmailOutlined /></Avatar>,
        name: 'Email',
    },
    {
        icon: <Avatar variant="square" size={AVATAR_SIZE.SMALL} sx={iconSize}> <PhoneOutlined /></Avatar>,
        name: 'Call',
    },
]

export type UserData = {
    role: string;
    company: string;
    name: string;
    email: string;
    helmetid: string;
    currentLocation: string;
    firstSeen: string;
    lastSeen: string;
    totalHours: string;
    directionLocation: string;
    imageSrc: string;
  };

const InfoPopupPeopleAndAssets = ({ layout = 1, userData = peopleandAssetsDummyData }: { layout?: number, userData?: UserData }) => {
    const theme = useTheme()
      const user = useSelector((state: any) => state.auth.user)

    //   console.log("InfoPopupPeopleAndAssets:::user::::", user)

    return (
        <>
            <Card sx={{ backgroundColor: '#F7F7F7', boxShadow: '4px 4px 6px 2px #0000004D', width: "50%", borderRadius: '6px', padding: '10px 12px 10px 10px' }}>
                <Stack gap={'10px'}>
                    <CardBody padding="0">
                        <Stack direction={'row'} gap={'10px'}>
                            {
                                user.imageSrc ? <Avatar variant="square" sx={{ width: '86px', height: layout === 1 ? '70px' : '86px' }} src={user.imageSrc} /> : 
                                <Avatar variant="square" sx={{ width: '86px', height: layout === 1 ? '70px' : '86px' }}>
                                    <PersonIcon sx={{ width: '27px', height: '31px' }}  />
                                </Avatar>
                            }
                            <Stack justifyContent={'space-between'}>
                                { layout === 1 ?
                                    <Box>
                                        <Typography fontWeight={'400'} fontSize={'10px'} color={theme.utilitarian.neutrals.slate}> { user.role } {user.email} </Typography>
                                        <Typography fontSize={'18px'} fontWeight={'700'} color={theme.utilitarian.neutrals.slate}> { user.name } </Typography>
                                    </Box> : 
                                    <Box>
                                        <Typography fontSize={'18px'} fontWeight={'700'} color={theme.utilitarian.neutrals.slate}> { user.name } </Typography>
                                        <Typography fontWeight={'400'} fontSize={'10px'} color={theme.utilitarian.neutrals.slate}> { user.role }, {user.email} </Typography>
                                        <Typography fontWeight={'400'} fontSize={'10px'} color={theme.utilitarian.neutrals.slate}> Helment ID - { user.helmetid } </Typography>
                                    </Box>
                                }
                                <Stack direction={'row'} alignItems={'center'} gap={'2px'}>
                                    <LocationFilledSvgIcon sx={{ marginLeft: '-3px', width: '17px', height: '18px' }} />
                                    <Typography fontWeight={'300'} fontSize={'10px'} color={theme.utilitarian.neutrals.slate}> Current Location </Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </CardBody>
                    <CardBody padding="0">
                        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                            <DetailCard item={{ title: 'First Seen', value: user.firstSeen }} />
                            <DetailCard item={{ title: 'Last Seen', value: user.lastSeen }} />
                            <DetailCard item={{ title: 'Total Hours', value: user.totalHours }} />
                        </Stack>
                    </CardBody>
                    <CardFooter sx={{ padding: '0' }}>
                        <Stack width={'100%'} direction={'row'} justifyContent={"space-between"} alignItems={'center'} gap={'6px'}>
                            <ActionIcon iconButtons={DEFAULT_ICON_BUTTONS} onClick={(item) => console.log(item.name + ' is clicked')} />
                            <Button sx={{ flex: '1' }} buttonsize={BUTTON_SIZE.SMALL} label="Directions" endIcon={<ChevronRightSvgIcon width={19} height={19} />} />
                        </Stack>
                    </CardFooter>
                </Stack>
            </Card>
        </>
    )
}

export default InfoPopupPeopleAndAssets