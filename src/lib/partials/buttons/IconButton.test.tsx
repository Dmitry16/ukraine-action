import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import IconButton from './IconButton';
import ClearAllOutlinedIcon from '@mui/icons-material/ClearAllOutlined';

import { RenderWithTheme } from "@/lib/utils"

describe('IconButton', () => {
    it('renders basic icon button without badge', () => {
        RenderWithTheme(
            <IconButton 
                icon={<ClearAllOutlinedIcon data-testid="mail-icon" />}
                aria-label="mail"
            />
        );
        
        expect(screen.getByTestId('mail-icon')).toBeInTheDocument();
    });

    it('renders icon button with badge content', () => {
        RenderWithTheme(
            <IconButton 
                icon={<ClearAllOutlinedIcon data-testid="mail-icon" />}
                badgeContent={5}
                aria-label="mail with notifications"
            />
        );
        
        expect(screen.getByText('5')).toBeInTheDocument();
        expect(screen.getByTestId('mail-icon')).toBeInTheDocument();
    });

    it('handles click events', async () => {
        const handleClick = jest.fn();
        const user = userEvent.setup();

        RenderWithTheme(
            <IconButton 
                icon={<ClearAllOutlinedIcon data-testid="mail-icon" />}
                onClick={handleClick}
                aria-label="mail"
            />
        );
        
        await user.click(screen.getByRole('button'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('applies custom badge props', () => {
        RenderWithTheme(
            <IconButton 
                icon={<ClearAllOutlinedIcon data-testid="mail-icon" />}
                badgeContent={3}
                badgeProps={{
                    color: "error"
                }}
                aria-label="mail with notifications"
            />
        );
        
        expect(screen.getByTestId('custom-badge')).toBeInTheDocument();
    });
});