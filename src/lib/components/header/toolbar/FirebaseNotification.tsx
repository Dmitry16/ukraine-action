import { IconButton } from "@/lib/partials";
import { IconButtonWrapperProps } from "@/lib/partials/buttons/IconButton";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const DEFAULT_BADGE_CONTENT = 4;

const DEFAULT_ICON = <NotificationsNoneIcon sx={{ width: "20px", height: "20px" }} />;
  
const DEFAULT_BUTTON_CLICK_HANDLER = () => { 
  console.log("Firebase Notification clicked");
}

const FirebaseNotification = ({ badgeContent, icon, onClick, ...props }: IconButtonWrapperProps) => {

  return (
    <IconButton
      badgeContent={badgeContent || DEFAULT_BADGE_CONTENT}
      icon={icon || DEFAULT_ICON}
      onClick={onClick || DEFAULT_BUTTON_CLICK_HANDLER}
      {...props}
    />
  );
};

export default FirebaseNotification;