import { Box, Divider, SxProps, Typography, useTheme } from "@mui/material"

type DetailCardProps = {
    item: {
        title: string,
        value: string
    },
    sx?: SxProps,
    typographySx?: SxProps
}

const DetailCard = ({ item, sx, typographySx } : DetailCardProps) => {
    const theme = useTheme()

    return (
        <Box padding={'2px 0'} sx={{ background: theme.utilitarian.gray[0], borderRadius: '4px', width: '87px', height: '44px', ...sx }}>
            <Typography textAlign={'center'} fontWeight={'300'} fontSize={'10px'} color={theme.utilitarian.neutrals.slate}> { item.title } </Typography>
            <Divider sx={{ margin: '2px 0' }} />
            <Typography padding={'2px'} textAlign={'center'} fontSize={'11px'} lineHeight={'18.7px'} fontWeight={'600'} color={theme.utilitarian.neutrals.slate} sx={{...typographySx}}> { item.value } </Typography>
        </Box>
    )
}

export default DetailCard