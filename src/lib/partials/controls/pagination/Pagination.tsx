import { Pagination as MuiPagination, PaginationProps, styled } from "@mui/material"

const CustomPagination = styled(MuiPagination)(({ theme }) => ({
    '& .MuiButtonBase-root': {
        color: theme.utilitarian.neutrals.slate,
        fontSize: 14,
        fontWeight: 500,
        minWidth: 31,
        height: 31,
        borderRadius: 4
    },
    '& .MuiPaginationItem-root': {
        '&.Mui-selected': {
            backgroundColor: theme.colors.primary.clearBlue,
            color: theme.utilitarian.gray[0],
            '&:hover': {
                backgroundColor: theme.colors.primary.clearBlue,
            },
        }
    }
}))

const Pagination = ({ ...props }: PaginationProps) => {
  return <CustomPagination {...props} />;
};

export default Pagination