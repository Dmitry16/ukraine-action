import { screen } from '@testing-library/react'

import Radio from './Radio'

import theme from '../../../theme/theme'
import { RenderWithTheme } from "@/lib/utils"

describe('Radio Component', () => {
  it('renders a radio button', () => {
    RenderWithTheme(<Radio />);
    const radio = screen.getByRole('radio');
    expect(radio).toBeInTheDocument();
  });

  it('applies default size "small"', () => {
    RenderWithTheme(<Radio />);
    const radio = screen.getByRole('radio');
    expect(radio).toHaveClass('MuiRadio-sizeSmall');
  });

  it('applies custom size when provided', () => {
    RenderWithTheme(<Radio size="medium" />);
    const radio = screen.getByRole('radio');
    expect(radio).toHaveClass('MuiRadio-sizeMedium');
  });

  it('applies correct color when not checked', () => {
    RenderWithTheme(<Radio />);
    const radio = screen.getByRole('radio');
    expect(radio).toHaveStyle(`color: ${theme.utilitarian.neutrals.lightSlate}`);
  });

  it('applies correct color when checked', () => {
    RenderWithTheme(<Radio checked />);
    const radio = screen.getByRole('radio');
    expect(radio).toHaveStyle(`color: ${theme.colors.primary.clearBlue}`);
  });

  it('applies correct color when disabled', () => {
    RenderWithTheme(<Radio disabled />);
    const radio = screen.getByRole('radio');
    expect(radio).toHaveStyle('color: #D6D9E1');
  });

  it('applies correct color when checked and disabled', () => {
    RenderWithTheme(<Radio checked disabled />);
    const radio = screen.getByRole('radio');
    expect(radio).toHaveStyle('color: #D6D9E1');
  });

  it('passes other props to the underlying MuiRadio', () => {
    const dataTestId = 'test-radio';
    RenderWithTheme(<Radio data-testid={dataTestId} />);
    const radio = screen.getByTestId(dataTestId);
    expect(radio).toBeInTheDocument();
  });
});