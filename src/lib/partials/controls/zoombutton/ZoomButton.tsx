import { SxProps, Divider, Stack, styled } from "@mui/material"

import { Card, IconButton } from "@/lib/partials"

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

type ZoomButtonProps = {
    sx?: SxProps,
    onZoomIn?: () => void,
    onZoomOut?: () => void,
}

const StyledIconButton = styled(IconButton)(({ theme }) => ({
    '&:hover': {
        borderRadius: 'initial',
        backgroundColor: theme.navigation.blue[2]
    },
    '& .MuiSvgIcon-root': {
        color: theme.utilitarian.neutrals.slate,
        '&:hover': {
            color: theme.utilitarian.gray[0]
        }
    }
}))

const StyledDivider = styled(Divider)(({ theme }) => ({
    color: theme.utilitarian.gray[20],
    margin: '5px 0'
}))

const ZoomButton = ({ sx, onZoomIn, onZoomOut }: ZoomButtonProps) => {

    return (
        <Card sx={{ width: 72, height: 35, ...sx }}>
            <Stack width={'100%'} height={'100%'} direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <StyledIconButton icon={<AddIcon />} disableRipple onClick={onZoomIn} />
                <StyledDivider orientation="vertical" flexItem />
                <StyledIconButton icon={<RemoveIcon />} disableRipple onClick={onZoomOut} />
            </Stack>
        </Card>
    )
}

export default ZoomButton
