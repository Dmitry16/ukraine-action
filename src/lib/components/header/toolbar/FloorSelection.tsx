import theme from "@/lib/theme/theme";

import { HeaderSelect } from "@/lib/partials"
import { HeaderSelectProps } from "@/lib/partials/inputs/HeaderSelect";

import ClearAllOutlinedIcon from '@mui/icons-material/ClearAllOutlined';

const DEFAULT_ICON = <ClearAllOutlinedIcon sx={{ width: "20px", height: "20px", marginBottom: '6px', color: theme.utilitarian.neutrals.slate }} />;

const DEFAULT_VALUE = "";

const DEFAULT_OPTIONS = [
  { value: "", label: "Floor" },
  { value: "msp", label: "MSP" },
  { value: "admin", label: "Admin" },
  { value: "user", label: "User" },
] as const

const DEFAULT_ONCHANGE = () => {
  console.log("FloorSelection changed");
}

const FloorSelection = ({ icon, options, ...props }: HeaderSelectProps) => {

  return (
    <HeaderSelect
      value={props.value || DEFAULT_VALUE}
      onChange={props.onChange || DEFAULT_ONCHANGE}
      options={options || DEFAULT_OPTIONS}
      icon={icon || DEFAULT_ICON}
      {...props}
    />
  );
};

export default FloorSelection