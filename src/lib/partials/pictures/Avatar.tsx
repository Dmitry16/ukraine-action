import { Avatar as MuiAvatar, AvatarProps, styled } from "@mui/material"

import { AVATAR_ICON_SIZE, AVATAR_SIZE } from "../../enums/partials.enum"


interface CustomAvatarProps extends AvatarProps {
    size?: AVATAR_SIZE,
}

const StyledAvatar = styled(MuiAvatar)<CustomAvatarProps>(({ theme, size, variant }) => {
    const sizeMapping = {
        [AVATAR_SIZE.EXTRA_LARGE]: AVATAR_ICON_SIZE.EXTRA_LARGE,
        [AVATAR_SIZE.LARGE]: AVATAR_ICON_SIZE.LARGE,
        [AVATAR_SIZE.MEDIUM]: AVATAR_ICON_SIZE.MEDIUM,
        [AVATAR_SIZE.MEDIUM_LARGE]: AVATAR_ICON_SIZE.MEDIUM_LARGE,
        [AVATAR_SIZE.SMALL]: AVATAR_ICON_SIZE.SMALL,
    };

    const { width, height } = sizeMapping[size as keyof typeof sizeMapping] || sizeMapping[AVATAR_SIZE.MEDIUM];

    return {
        width: size,
        height: size,
        borderRadius: variant === "square" ? "5px" : "50%",
        backgroundColor: theme.navigation.blue[0],
        "& .MuiSvgIcon-root": {
            color: theme.navigation.blue[1],
            width: width,
            height: height
        }
    }
})

const Avatar = ({ size = AVATAR_SIZE.MEDIUM, ...props }: CustomAvatarProps) => {
    return (
        <StyledAvatar size={size} {...props} />
    )
}

export default Avatar