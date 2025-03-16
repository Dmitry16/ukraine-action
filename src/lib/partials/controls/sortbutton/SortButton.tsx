import { styled, ToggleButtonGroupProps, ToggleButtonProps } from '@mui/material'

import { ToggleButtonGroup, ToggleButton } from '@/lib/partials'

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const CustomToggleButtonGroup = styled(ToggleButtonGroup)(({ theme, disabled }) => ({
    width: 24,
    height: 57,
    '& .MuiToggleButtonGroup-firstButton': {
        padding: '0px 4px 5px',
        borderColor: disabled ? theme.utilitarian.gray[10] + ' !important' : theme.navigation.blue[0] + ' !important',
        height: '50%'
    },
    '& .MuiToggleButtonGroup-lastButton': {
        borderTop: 'initial',
        padding: '5px 4px 0px',
        height: '50%'
    },
    '& .MuiButtonBase-root + .MuiToggleButton-root': {
        '&.MuiToggleButton-root': {
          borderColor: disabled ? theme.utilitarian.gray[10] + ' !important' : theme.navigation.blue[0] + ' !important',
          borderTop: 'initial'
        }
    },
    '& .MuiSvgIcon-root': {
        width: 20,
        height: 20 ,
        color: disabled ? theme.utilitarian.neutrals.lightSlate : theme.colors.primary.clearBlue
    }
}));

interface SortButtonProps {
    groupProps?: ToggleButtonGroupProps;
    buttonProps?: ToggleButtonProps;
    disabled?: boolean;
    onSort?: (e: any, type: 'asc' | 'desc') => void;
}

const SortButton = ({ ...props }: SortButtonProps) => {

  return (
    <CustomToggleButtonGroup {...props.groupProps} orientation={props.groupProps?.orientation || 'vertical'} disabled={props.disabled}>
      <ToggleButton value={'asc'} {...props.buttonProps} onClick={(e) => props.onSort ? props.onSort(e, 'asc') : undefined}>
        <KeyboardArrowUpIcon />
      </ToggleButton>
      <ToggleButton value={'desc'} {...props.buttonProps} onClick={(e) => props.onSort ? props.onSort(e, 'desc') : undefined}>
        <KeyboardArrowDownIcon />
      </ToggleButton>
    </CustomToggleButtonGroup>
  )
} 

export default SortButton;