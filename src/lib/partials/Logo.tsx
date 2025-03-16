import { Typography, useTheme, Box } from "@mui/material";

import { CardHeader } from ".";

import { COMMON } from "../constants/common";
import ckLogo from "../assets/logos/ck-icon.svg?url";

interface LogoProps {
  imageStyle?: React.CSSProperties;
  textStyle?: React.CSSProperties;
  headerWrapperStyle?: React.CSSProperties;
}

const Logo = ({ imageStyle, textStyle, headerWrapperStyle }: LogoProps) => {
  const theme = useTheme();
  return (
    <CardHeader wrapperSx={{ marginTop: '3rem', marginBottom: '2.5rem', ...headerWrapperStyle }}>
      <Box style={{ textAlign: "center" }}>
        <img
          style={{ width: "83px", height: "73px", marginBottom: "0.5rem", ...imageStyle }}
          src={ckLogo}
          alt="ck-logo"
        />
      </Box>
      <Typography
        align="center"
        textTransform={"uppercase"}
        fontWeight={"500"}
        variant="H3"
        color={theme.colors.primary.navalNight}
        style={{ ...textStyle }}
      >
        {COMMON.COMPANY_NAME}
      </Typography>
    </CardHeader>
  );
};

export default Logo;
