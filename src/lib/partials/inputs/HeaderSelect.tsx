import React from 'react';
import { styled, FormControl, Select, MenuItem, SelectProps, FormControlProps, useTheme } from '@mui/material';
import { KeyboardArrowDown } from "@mui/icons-material";

export type HeaderSelectProps = {
    options: { value: string; label: string }[];
    icon?: React.ReactNode;
} & SelectProps & FormControlProps

const StyledSelect = styled(Select)(({ theme }) => ({
    fontSize: "13px",
    fontWeight: '500',
    color: theme.utilitarian.neutrals.slate,
    height: "32px",
    "& .MuiSelect-select": {
        padding: "4px 30px 5px 5px !important"
    },
    "& fieldset": {
        border: "none"
    }
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    fontSize: '12px',
    padding: '13px 13px',
    fontWeight: '400',
    color: theme.utilitarian.neutrals.slate,
    borderRadius: '5px',
    "&.Mui-selected": {
        backgroundColor: theme.utilitarian.gray[5],
    }
}));

const HeaderSelect = ({ options, icon, ...props }: HeaderSelectProps) => {
    const theme = useTheme();

    return (
        <FormControl size="small" {...props}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                {icon}
                <StyledSelect
                    displayEmpty
                    IconComponent={(props) => <KeyboardArrowDown {...props} sx={{ color: theme.utilitarian.neutrals.slate, width: "19px", height: "23px", top: 'calc(50% - 0.53em) !important' }} />}
                    MenuProps={{
                        MenuListProps: {
                            sx: {
                                padding: '5px'
                            }
                        }
                    }}
                    {...props}
                >
                    {options.map((option) => (
                        <StyledMenuItem key={option.value} value={option.value}>
                            {option.label}
                        </StyledMenuItem>
                    ))}
                </StyledSelect>
            </div>
        </FormControl>
    );
};

export default HeaderSelect;