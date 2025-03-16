import { Box, BoxProps } from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  boxProps?: BoxProps;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, boxProps, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3} {...boxProps}>{children}</Box>}
    </div>
  );
}

export default TabPanel