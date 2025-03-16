import React from 'react'

import { FormControlLabel, FormControlLabelProps, styled, Box, Typography, RadioProps, useTheme } from "@mui/material"

import { Radio } from "@/lib/partials"
import InfoIcon from "@mui/icons-material/Info"

interface CustomFormControlLabelProps extends Omit<FormControlLabelProps, "control" | "label"> {
    label?: React.ReactNode;
    icon?: React.ReactNode;
    text: string;
    checked: boolean;
}

interface EventBubbleProps extends CustomFormControlLabelProps {
    radioProps?: RadioProps;
}

const StyledFormControlLabel = styled(FormControlLabel)<CustomFormControlLabelProps>(({ theme, checked }) => ({
    width: 289,
    height: 47,
    padding: 14,
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row-reverse",
    backgroundColor:  checked ? theme.navigation.blue[0] : theme.utilitarian.gray[5],
    border: `1px solid ${ checked ? theme.colors.primary.clearBlue : theme.utilitarian.neutrals.textPlaceHolder}`
}));

const StyledRadio = styled(Radio)<RadioProps>(({ theme }) => ({
    "&.Mui-checked": {
        color: "transparent",
        border: `7px solid ${theme.colors.primary.clearBlue}`,
        borderRadius: "50%",
        height: 20,
        width: 20,
        marginRight: 3,
    },
    "& .MuiSvgIcon-root": {
        width: 24,
        height: 24,
    }
}));

const EventBubble: React.FC<EventBubbleProps> = ({ radioProps, ...props }) => {

    const theme = useTheme();

    return (
        <StyledFormControlLabel
            control={<StyledRadio {...radioProps} />}
            label={ props?.label || <Box display="flex" alignItems="center" gap={1}>
                { props?.icon || <InfoIcon sx={{ fontSize: 20, color: props.checked ? theme.colors.primary.clearBlue : theme.utilitarian.neutrals.slate }} /> }
                <Typography sx={{ color: props?.checked ? theme.colors.primary.clearBlue : theme.utilitarian.neutrals.slate , fontSize: 13, fontWeight: 500 }}>{ props?.text }</Typography>
              </Box>}
            {...props}
        />
    );
};

export default EventBubble;