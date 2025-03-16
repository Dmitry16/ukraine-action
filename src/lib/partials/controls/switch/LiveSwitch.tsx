import Switch from "./Switch"
import { styled, SwitchProps } from "@mui/material"

const CustomLiveSwitch = styled(Switch)(({ theme }) => ({
  width: 63,
  height: 26,
  padding: 0,
  fontSize: "12px !important",
  "& .MuiSwitch-switchBase": {
    transition: "transform 0.3s ease",
    backgroundColor: "white",
    color: "#53B04F",
    "&.Mui-checked": {
      color: "white",
      opacity: 1,
      transform: "translateX(170%)",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.utilitarian.green[60],
        opacity: 1,
        "&:before, &:after": {
      display: "inline-block",
      position: "absolute",
      top: "50%",
      width: "50%",
      transform: "translateY(-50%)",
      color: "#fff",
      textAlign: "center",
      fontWeight: 700,
    },
    "&:before": {
          content: '"LIVE"',
          opacity: 1,
        },
        "&:after": {
          content: '""',
          opacity: 0,
        },
      },
      '& .MuiSvgIcon-root': {
        color: theme.utilitarian.green[60] + ' !important',
        height: 17,
        width: 17,
      }    
    },
    "& .MuiSwitch-input": {
      left: '-170%',
      width: '445%'
    }
  },
  "& .MuiSwitch-thumb": {
    width: 24,
    height: 24,
    backgroundColor: "#FFFFFF",
  },
  "& .MuiSwitch-track": {
    borderRadius: 20,
    backgroundColor: "#D6D9E1",
    opacity: 1,
    position: "relative",
    "&:before, &:after": {
      display: "inline-block",
      position: "absolute",
      top: "50%",
      width: "50%",
      transform: "translateY(-50%)",
      color: "#fff",
      textAlign: "center",
      fontWeight: 700,
    },
    "&:before": {
      content: '""', // Default LIVE on the left
      left: 4,
      opacity: 0,
    },
    "&:after": {
      content: '"LIVE"', // Initially empty
      right: 4,
      opacity: 1,
      color: theme.utilitarian.neutrals.lightSlate
    },
  },
}));

const LiveSwitch = ({ ...props }: SwitchProps) => {
  return <CustomLiveSwitch {...props} />;
};

export default LiveSwitch