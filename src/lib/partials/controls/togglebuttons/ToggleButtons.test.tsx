import { screen, fireEvent } from '@testing-library/react'

import theme from '../../../theme/theme'

import ToggleButton from './ToggleButton'
import ToggleButtonGroup from './ToggleButtonGroup'

import { RenderWithTheme } from "@/lib/utils"

describe('ToggleButton Component', () => {
  it('renders a toggle button', () => {
    RenderWithTheme(<ToggleButton value="test">Test</ToggleButton>);
    const toggleButton = screen.getByRole('button');
    expect(toggleButton).toBeInTheDocument();
  });

  it('applies correct styles when not selected', () => {
    RenderWithTheme(<ToggleButton value="test">Test</ToggleButton>);
    const toggleButton = screen.getByRole('button');
    expect(toggleButton).toHaveStyle(`color: ${theme.utilitarian.neutrals.textPlaceHolder}`);
    expect(toggleButton).toHaveStyle(`background-color: ${theme.utilitarian.gray[0]}`);
    expect(toggleButton).toHaveStyle(`border-color: ${theme.utilitarian.neutrals.lightSlate}`);
  });

  it('applies correct styles when selected', () => {
    RenderWithTheme(<ToggleButton value="test" selected>Test</ToggleButton>);
    const toggleButton = screen.getByRole('button');
    expect(toggleButton).toHaveStyle(`background-color: ${theme.colors.primary.clearBlue}`);
    expect(toggleButton).toHaveStyle(`color: ${theme.utilitarian.gray[0]}`);
  });

  it('applies custom sx props', () => {
    RenderWithTheme(<ToggleButton value="test" sx={{ width: '100px' }}>Test</ToggleButton>);
    const toggleButton = screen.getByRole('button');
    expect(toggleButton).toHaveStyle(`width: 100px`);
  });

  it('applies default minWidth and minHeight', () => {
    RenderWithTheme(<ToggleButton value="test">Test</ToggleButton>);
    const toggleButton = screen.getByRole('button');
    expect(toggleButton).toHaveStyle(`min-width: 30px`);
    expect(toggleButton).toHaveStyle(`min-height: 30px`);
  });

  it('applies default padding of 0', () => {
      RenderWithTheme(<ToggleButton value="test">Test</ToggleButton>);
      const toggleButton = screen.getByRole('button');
      expect(toggleButton).toHaveStyle(`padding: 0px`);
  })
});

describe('ToggleButtonGroup Component', () => {
  it('renders a toggle button group', () => {
    RenderWithTheme(
      <ToggleButtonGroup>
        <ToggleButton value="one">One</ToggleButton>
        <ToggleButton value="two">Two</ToggleButton>
      </ToggleButtonGroup>
    );
    const toggleButtonGroup = screen.getByRole('group');
    expect(toggleButtonGroup).toBeInTheDocument();
  });

  it('applies correct styles to the group', () => {
    RenderWithTheme(
      <ToggleButtonGroup>
        <ToggleButton value="one">One</ToggleButton>
        <ToggleButton value="two">Two</ToggleButton>
      </ToggleButtonGroup>
    );
    const toggleButtonGroup = screen.getByRole('group');
    expect(toggleButtonGroup).toHaveStyle(`height: 44px`);
    expect(toggleButtonGroup).toHaveStyle(`border-radius: 4px`);
  });

  it('applies correct styles to grouped buttons', () => {
    RenderWithTheme(
      <ToggleButtonGroup>
        <ToggleButton value="one">One</ToggleButton>
        <ToggleButton value="two">Two</ToggleButton>
      </ToggleButtonGroup>
    );
    const toggleButtons = screen.getAllByRole('button');
    toggleButtons.forEach((button) => {
      expect(button).toHaveStyle(`color: ${theme.utilitarian.neutrals.lightSlate}`);
    });
  });

  it('handles toggle button selection within the group', () => {
    RenderWithTheme(
      <ToggleButtonGroup exclusive>
        <ToggleButton value="one">One</ToggleButton>
        <ToggleButton value="two">Two</ToggleButton>
      </ToggleButtonGroup>
    );
    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[0]);
    expect(buttons[0]).toHaveClass('Mui-selected');
    expect(buttons[1]).not.toHaveClass('Mui-selected');
    fireEvent.click(buttons[1]);
    expect(buttons[0]).not.toHaveClass('Mui-selected');
    expect(buttons[1]).toHaveClass('Mui-selected');
  });
});