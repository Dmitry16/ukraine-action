import { styled, Badge } from '@mui/material'

//Use this as a Wrapper for Avatar in need of online status.
const OnlineStyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: theme.utilitarian.green[60],
      color: theme.utilitarian.green[60],
      boxShadow: `0 0 0 2px ${theme.utilitarian.gray[0]}`,
      "&::after": {
        position: "absolute",
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        border: `1px solid ${theme.utilitarian.green[60]}`,
        content: '""',
      },
    },
}));

export default OnlineStyledBadge