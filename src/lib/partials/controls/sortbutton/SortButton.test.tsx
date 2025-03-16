import { screen, fireEvent } from '@testing-library/react'

import { ToggleButtonProps } from '@mui/material'

import theme from '../../../theme/theme'

import SortButton from './SortButton'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import { RenderWithTheme } from "@/lib/utils"

describe('SortButton Component', () => {
  it('renders two toggle buttons with correct icons', () => {
    RenderWithTheme(<SortButton />);
    expect(screen.getByRole('button', { name: /keyboard arrow up/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /keyboard arrow down/i })).toBeInTheDocument();
  });

  it('calls onSort with "asc" when the up button is clicked', () => {
    const onSortMock = jest.fn();
    RenderWithTheme(<SortButton onSort={onSortMock} />);
    fireEvent.click(screen.getByRole('button', { name: /keyboard arrow up/i }));
    expect(onSortMock).toHaveBeenCalledWith(expect.any(Object), 'asc');
  });

  it('calls onSort with "desc" when the down button is clicked', () => {
    const onSortMock = jest.fn();
    RenderWithTheme(<SortButton onSort={onSortMock} />);
    fireEvent.click(screen.getByRole('button', { name: /keyboard arrow down/i }));
    expect(onSortMock).toHaveBeenCalledWith(expect.any(Object), 'desc');
  });

  it('applies correct styles when disabled', () => {
    RenderWithTheme(<SortButton disabled />);
    const upButton = screen.getByRole('button', { name: /keyboard arrow up/i });
    const downButton = screen.getByRole('button', { name: /keyboard arrow down/i });

    expect(upButton).toHaveStyle(`border-color: ${theme.utilitarian.gray[10]} !important`);
    expect(downButton).toHaveStyle(`border-color: ${theme.utilitarian.gray[10]} !important`);
    expect(screen.getByTestId(KeyboardArrowUpIcon.muiName)).toHaveStyle(`color: ${theme.utilitarian.neutrals.lightSlate}`);
    expect(screen.getByTestId(KeyboardArrowDownIcon.muiName)).toHaveStyle(`color: ${theme.utilitarian.neutrals.lightSlate}`);
  });

  it('applies correct styles when not disabled', () => {
    RenderWithTheme(<SortButton />);
    const upButton = screen.getByRole('button', { name: /keyboard arrow up/i });
    const downButton = screen.getByRole('button', { name: /keyboard arrow down/i });

    expect(upButton).toHaveStyle(`border-color: ${theme.navigation.blue[0]} !important`);
    expect(downButton).toHaveStyle(`border-color: ${theme.navigation.blue[0]} !important`);
    expect(screen.getByTestId(KeyboardArrowUpIcon.muiName)).toHaveStyle(`color: ${theme.colors.primary.clearBlue}`);
    expect(screen.getByTestId(KeyboardArrowDownIcon.muiName)).toHaveStyle(`color: ${theme.colors.primary.clearBlue}`);
  });

  it('applies custom group props', () => {
    RenderWithTheme(<SortButton groupProps={{ exclusive: true }} />);
    const toggleButtonGroup = screen.getByRole('group');
    expect(toggleButtonGroup).toHaveAttribute('aria-exclusive', 'true');
  });
  it('applies custom button props', () => {
    RenderWithTheme(<SortButton buttonProps={{ 'data-testid': 'custom-button' } as unknown as ToggleButtonProps} />);
    const customButton = screen.getByTestId('custom-button');
    expect(customButton).toBeInTheDocument();
  });

  it('applies default orientation "vertical"', () => {
    RenderWithTheme(<SortButton />);
    const toggleButtonGroup = screen.getByRole('group');
    expect(toggleButtonGroup).toHaveAttribute('aria-orientation', 'vertical');
  });

  it('applies custom orientation', () => {
    RenderWithTheme(<SortButton groupProps={{ orientation: 'horizontal' }} />);
    const toggleButtonGroup = screen.getByRole('group');
    expect(toggleButtonGroup).toHaveAttribute('aria-orientation', 'horizontal');
  });

});