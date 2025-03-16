import { useTheme } from "@mui/material";
import theme from "@/lib/theme/theme";

import { IconButton } from "@/lib/partials";
import { IconButtonWrapperProps } from "@/lib/partials/buttons/IconButton";

import PersonIcon from "@mui/icons-material/Person";

const DEFAULT_ICON = <PersonIcon sx={{ width: "20px", height: "20px", color: theme.navigation.blue[1] }} />;

const DEFAULT_BUTTON_CLICK_HANDLER = () => {
  console.log("Quick User Toggle clicked");
}

const QuickUserToggle = ({ icon, onClick, sx, ...props }: IconButtonWrapperProps) => {
  const theme = useTheme();

  return (
    <IconButton
      sx={{ backgroundColor: theme.navigation.blue[0], ...sx }}
      icon={icon || DEFAULT_ICON}
      onClick={onClick || DEFAULT_BUTTON_CLICK_HANDLER}
      {...props}
    />
  );
};

export default QuickUserToggle