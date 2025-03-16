import { IconButton } from "@/lib/partials";
import { IconButtonWrapperProps } from "@/lib/partials/buttons/IconButton";

import MailOutlineIcon from "@mui/icons-material/MailOutline";

const DEFAULT_BADGE_CONTENT = 4;

const DEFAULT_ICON = <MailOutlineIcon sx={{ width: "20px", height: "20px" }} />;

const DEFAULT_BUTTON_CLICK_HANDLER = () => {
  console.log("Firebase Messaging clicked");
}

const FirebaseMessaging = ({ badgeContent, icon, onClick, ...props }: IconButtonWrapperProps) => {

  return (
    <IconButton
      badgeContent={badgeContent || DEFAULT_BADGE_CONTENT}
      icon={icon || DEFAULT_ICON}
      onClick={onClick || DEFAULT_BUTTON_CLICK_HANDLER}
      {...props}
    />
  );
};

export default FirebaseMessaging;