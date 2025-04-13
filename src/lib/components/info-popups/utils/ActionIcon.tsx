import theme from "@/lib/theme/theme";

import IconButton from "@/lib/partials/buttons/IconButton";
import { DeleteSvgIcon, EditSvgIcon } from "@/lib/partials/icons/icons";
import React from "react";

export type IconButtonsProps = {
    icon: React.ReactNode;
    buttonBackgroundColor?: string;
    name: string;
}

export type ActionIconProps = {
    iconButtons: IconButtonsProps[];
    onClick: (item: IconButtonsProps) => void;
}

const ActionIcon = ({ iconButtons, onClick }: ActionIconProps) => {

  return (
    <>
        {
            iconButtons.map((item, index) => (
                <IconButton
                    key={index}
                    sx={{
                        borderRadius: "4px",
                        height: "31px",
                        width: "31px",
                        padding: "0",
                        backgroundColor: item.buttonBackgroundColor,
                    }}
                    icon={item.icon}
                    onClick={() => onClick(item)}
                />
            ))
        }
    </>
  );
};

export default ActionIcon;