import { IconButton as MuiIconButton, Badge, IconButtonProps, BadgeProps, styled } from '@mui/material';

export interface IconButtonWrapperProps extends IconButtonProps {
    badgeContent?: number;
    badgeProps?: BadgeProps;
    icon: React.ReactNode;
}

const StyledIconButton = styled(MuiIconButton)(({ theme }) => ({
    padding: "5px",
    '&:hover': {
        backgroundColor: theme.navigation.blue[0],
        color: theme.colors.primary.clearBlue
    }
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: theme.colors.primary.clearBlue,
        color: theme.utilitarian.gray[0],
        fontSize: "10px",
        fontWeight: "500",
        height: "16px",
        width: "16px",
        minWidth: "10px",
        padding: "0",
        top: "3px"
    }
}));

const IconButton = ({ badgeContent, badgeProps, icon, ...iconButtonProps }: IconButtonWrapperProps) => {
    if (badgeContent !== undefined) {
        return (
            <StyledIconButton {...iconButtonProps}>
                <StyledBadge badgeContent={badgeContent} {...badgeProps}>
                    {icon}
                </StyledBadge>
            </StyledIconButton>
        );
    }

    return (
        <StyledIconButton {...iconButtonProps}>
            {icon}
        </StyledIconButton>
    );
};

export default IconButton; 