import { screen } from '@testing-library/react';

import Logo from './Logo';

import { RenderWithTheme } from "@/lib/utils"

describe('Logo Component', () => {
  it('renders without crashing', () => {
    RenderWithTheme(<Logo />);
    expect(screen.getByAltText('ck-logo')).toBeInTheDocument();
  });

  it('renders with custom image styles', () => {
    const customStyle = { width: '100px', height: '100px' };
    RenderWithTheme(<Logo imageStyle={customStyle} />);
    const logo = screen.getByAltText('ck-logo');
    expect(logo).toHaveStyle(customStyle);
  });

  it('renders company name', () => {
    RenderWithTheme(<Logo />);
    expect(screen.getByText('Crowdkeep')).toBeInTheDocument();
  });
}); 