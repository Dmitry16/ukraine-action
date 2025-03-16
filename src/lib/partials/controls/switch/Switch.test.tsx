import { screen, fireEvent } from '@testing-library/react'

import theme from '../../../theme/theme'

import Switch from './Switch'

import { RenderWithTheme } from "@/lib/utils"

describe('Switch Component', () => {
  it('renders a switch button', () => {
    RenderWithTheme(<Switch />);
    const switchElement = screen.getByRole('checkbox');
    expect(switchElement).toBeInTheDocument();
  });

  it('applies correct styles when unchecked', () => {
    RenderWithTheme(<Switch />);
    const switchBase = screen.getByRole('checkbox');
    const track = switchBase.parentElement?.querySelector('.MuiSwitch-track');
    const thumb = switchBase.parentElement?.querySelector('.MuiSwitch-thumb');

    expect(track).toHaveStyle(`background-color: #D6D9E1`);
    expect(thumb).toHaveStyle(`color: #FFFFFF`);
  });

  it('applies correct styles when checked', () => {
    RenderWithTheme(<Switch checked />);
    const switchBase = screen.getByRole('checkbox');
    const track = switchBase.parentElement?.querySelector('.MuiSwitch-track');
    switchBase.parentElement?.querySelector('.MuiSwitch-thumb');

    expect(track).toHaveStyle(`background-color: ${theme.colors.primary.clearBlue}`);
    expect(switchBase).toHaveStyle(`transform: translateX(16px)`);
  });

  it('applies correct styles when disabled', () => {
    RenderWithTheme(<Switch disabled />);
    const switchBase = screen.getByRole('checkbox');
    const track = switchBase.parentElement?.querySelector('.MuiSwitch-track');
    const thumb = switchBase.parentElement?.querySelector('.MuiSwitch-thumb');

    expect(track).toHaveStyle(`background-color: #D6D9E1`);
    expect(thumb).toHaveStyle(`color: #FFFFFF`);
  });

  it('applies correct styles when checked and disabled', () => {
    RenderWithTheme(<Switch checked disabled />);
    const switchBase = screen.getByRole('checkbox');
    const track = switchBase.parentElement?.querySelector('.MuiSwitch-track');

    expect(track).toHaveStyle(`background-color: ${theme.utilitarian.neutrals.lightSlate}`);
    expect(track).toHaveStyle(`opacity: 0.4`);
  });

  it('toggles the switch when clicked', () => {
    RenderWithTheme(<Switch />);
    const switchBase = screen.getByRole('checkbox');

    expect(switchBase).not.toBeChecked();
    fireEvent.click(switchBase);
    expect(screen.getByRole('checkbox')).toBeChecked();
    fireEvent.click(screen.getByRole('checkbox'));
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('applies custom props', () => {
    RenderWithTheme(<Switch data-testid="custom-switch" />);
    const customSwitch = screen.getByTestId('custom-switch');
    expect(customSwitch).toBeInTheDocument();
  });

  it('applies correct icon style', () => {
    RenderWithTheme(<Switch />);
    const svgIcon = screen.getByRole('checkbox').parentElement?.querySelector('.MuiSvgIcon-root');
    expect(svgIcon).toHaveStyle(`color: ${theme.utilitarian.neutrals.slate}`);
  });

  it('applies correct checked icon style', () => {
    RenderWithTheme(<Switch checked />);
    const svgIcon = screen.getByRole('checkbox').parentElement?.querySelector('.MuiSvgIcon-root');
    expect(svgIcon).toHaveStyle(`color: ${theme.colors.primary.clearBlue}`);
  });
});