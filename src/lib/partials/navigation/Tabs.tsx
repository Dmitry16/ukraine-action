import { Tabs as MuiTabs, Tab as MuiTab, styled, TabsProps as MuiTabsProps, TabProps as MuiTabProps } from '@mui/material'

const StyledTabs = styled((props: MuiTabsProps) => (<MuiTabs {...props} slotProps={{ indicator: { children: <span className="MuiTabs-indicatorSpan" /> } }} />))(({theme}) => ({
    "& .MuiTabs-indicator": {
      backgroundColor: 'transparent',
      height: 3,
      bottom: 12,
      display: 'flex',
      justifyContent: 'center',
    },
    "& .MuiTabs-indicatorSpan": {
      minWidth: '83%',
      backgroundColor: theme.colors.primary.clearBlue
    }
}))

const StyledTab = styled(MuiTab)(({theme}) => ({
    fontSize: '14px',
    fontWeight: '700',
    borderRadius: '4px',
    color: theme.utilitarian.neutrals.slate,
    padding: '7.5px 27.14px 23px',
    "&.Mui-selected": {
      color: theme.colors.primary.clearBlue,
    },
    "&.Mui-disabled": {
      color: theme.utilitarian.neutrals.lightSlate,
    },
    "&:active": {
      backgroundColor: theme.navigation.blue[0],
      color: theme.colors.primary.clearBlue
    }
}))

interface CustomTabsProps extends MuiTabsProps {
    tabs: MuiTabProps[];
}

const Tabs = ({ tabs, value, onChange, ...props }: CustomTabsProps) => {
  return (
    <StyledTabs value={value} onChange={onChange} aria-label="icon label tabs example" {...props}>
        {tabs.map((tab, index) => (
            <StyledTab
                key={index}
                {...tab}
            />    
        ))}
    </StyledTabs>
  )
}

export default Tabs