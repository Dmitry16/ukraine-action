import { Box, Stack, SxProps, Typography, StackProps, styled, TypographyProps } from "@mui/material";

export type InfoFrameProps = {
  value: string
  text: string
  icon: string
  bgcolor?: string
  textcolor?: string
  padding?: string
  sx?: SxProps
  valueProps?: TypographyProps
  textProps?: TypographyProps
  imageSx?: SxProps
}

type CustomStackProps = {
  bgcolor?: string
    textcolor?: string
    padding?: string
} & StackProps

const StyledStack = styled(Stack)<CustomStackProps>(({ theme, padding, bgcolor, textcolor }) => ({
    minWidth: 0,
    padding: padding || '14px 15px',
    backgroundColor: bgcolor || theme.navigation.blue[1],
    color: textcolor || theme.utilitarian.neutrals.slate,
    borderRadius: '5px'
}))

const DEFAULT_VALUE_STYLE = {
    fontSize: 24, fontWeight: 700
}

const DEFAULT_TEXT_STYLE = {
    fontSize: 12, fontWeight: 500
}

const InfoFrame = ({ value, text, icon, bgcolor, textcolor, padding, sx, valueProps, textProps, imageSx, ...props }: InfoFrameProps) => {
  return (
    <StyledStack
          padding={padding}
          bgcolor={bgcolor}
          textcolor={textcolor}
          direction={'row'}
          alignItems="flex-start"
          justifyContent="space-between"
          sx={{...sx}}
          {...props}>
      <Stack>
        <Typography sx={{ ...DEFAULT_VALUE_STYLE, ...valueProps?.sx }} {...valueProps}>
            { value }
        </Typography>
        <Typography sx={{ ...DEFAULT_TEXT_STYLE, ...textProps?.sx }} {...textProps}>
            { text }
        </Typography>
      </Stack>
      <Box component={'img'} src={icon} sx={{ width: 34, height: 34, ...imageSx }} />
    </StyledStack>
  );
};

export default InfoFrame;
