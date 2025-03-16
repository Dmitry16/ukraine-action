import { screen, fireEvent } from '@testing-library/react'

import theme from '../../../theme/theme'

import LiveSwitch from './LiveSwitch'

import { RenderWithTheme } from "@/lib/utils"

describe('LiveSwitch Component', () => {
  it('renders a switch button', () => {
    RenderWithTheme(<LiveSwitch />);
    const switchElement = screen.getByRole('checkbox');
    expect(switchElement).toBeInTheDocument();
  });

  it('applies correct styles when unchecked', () => {
    RenderWithTheme(<LiveSwitch />);
    const switchBase = screen.getByRole('checkbox');
    const track = switchBase.parentElement?.querySelector('.MuiSwitch-track');
    const thumb = switchBase.parentElement?.querySelector('.MuiSwitch-thumb');

    expect(track).toHaveStyle(`background-color: #D6D9E1`);
    expect(thumb).toHaveStyle(`background-color: #FFFFFF`);
    expect(track).toHaveTextContent('LIVE');
    expect(track).not.toHaveTextContent('');
    expect(switchBase).toHaveStyle(`color: #53B04F`);
  });

  it('applies correct styles when checked', () => {
    RenderWithTheme(<LiveSwitch checked />);
    const switchBase = screen.getByRole('checkbox');
    const track = switchBase.parentElement?.querySelector('.MuiSwitch-track');
    const thumb = switchBase.parentElement?.querySelector('.MuiSwitch-thumb');

    expect(track).toHaveStyle(`background-color: ${theme.utilitarian.green[60]}`);
    expect(thumb).toHaveStyle(`background-color: #FFFFFF`);
    expect(track).toHaveTextContent('LIVE');
    expect(track).not.toHaveTextContent('');
    expect(switchBase).toHaveStyle(`transform: translateX(170%)`);
    expect(switchBase).toHaveStyle(`color: white`);
  });

  it('toggles the switch when clicked', () => {
    RenderWithTheme(<LiveSwitch />);
    const switchBase = screen.getByRole('checkbox');

    expect(switchBase).not.toBeChecked();
    fireEvent.click(switchBase);
    expect(screen.getByRole('checkbox')).toBeChecked();
    fireEvent.click(screen.getByRole('checkbox'));
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('applies custom props', () => {
    RenderWithTheme(<LiveSwitch data-testid="custom-switch" />);
    const customSwitch = screen.getByTestId('custom-switch');
    expect(customSwitch).toBeInTheDocument();
  });

  it('applies correct icon style when checked', () => {
    RenderWithTheme(<LiveSwitch checked />);
    const svgIcon = screen.getByRole('checkbox').parentElement?.querySelector('.MuiSvgIcon-root');
    expect(svgIcon).toHaveStyle(`color: ${theme.utilitarian.green[60]} !important`);
  });

  it('applies correct track content when unchecked', () => {
    RenderWithTheme(<LiveSwitch />);
    const track = screen.getByRole('checkbox').parentElement?.querySelector('.MuiSwitch-track');
    expect(track).toHaveTextContent('LIVE');
  });

  it('applies correct track content when checked', () => {
    RenderWithTheme(<LiveSwitch checked />);
    const track = screen.getByRole('checkbox').parentElement?.querySelector('.MuiSwitch-track');
    expect(track).toHaveTextContent('LIVE');
  });

  it('applies correct input style', () => {
    RenderWithTheme(<LiveSwitch />);
    const input = screen.getByRole('checkbox').parentElement?.querySelector('.MuiSwitch-input');
    expect(input).toHaveStyle(`left: -170%`);
    expect(input).toHaveStyle(`width: 445%`);
  });
});