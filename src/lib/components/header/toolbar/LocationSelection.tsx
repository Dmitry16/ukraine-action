import theme from "@/lib/theme/theme";

import { HeaderSelect } from "@/lib/partials"
import { HeaderSelectProps } from "@/lib/partials/inputs/HeaderSelect";

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const DEFAULT_ICON = <LocationOnOutlinedIcon sx={{ width: "20px", height: "20px", marginBottom: '6px', color: theme.utilitarian.neutrals.slate }} />;

const DEFAULT_VALUE = "";
  
const DEFAULT_OPTIONS = [
  { value: "", label: "Location" },
  { value: "site1", label: "Site 1" },
  { value: "site2", label: "Site 2" },
  { value: "site3", label: "Site 3" },
] as const

const DEFAULT_ONCHANGE = () => {
  console.log("LocationSelection changed");
}

const LocationSelection = ({ icon, options, ...props }: HeaderSelectProps) => {
  
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

export default LocationSelection