import React from 'react';
import { screen } from '@testing-library/react';

import { Card, CardHeader, CardBody, CardFooter } from '../index';

import { RenderWithTheme } from "@/lib/utils"

describe('Card Components', () => {
  describe('Card Component', () => {
    it('renders without crashing', () => {
      RenderWithTheme(<Card />);
      expect(screen.getByTestId('card')).toBeInTheDocument();
    });

    it('renders with default CardBody when no children provided', () => {
      RenderWithTheme(<Card />);
      expect(screen.getByTestId('card').querySelector('.MuiCardContent-root')).toBeInTheDocument();
    });

    it('applies custom styles through sx prop', () => {
      RenderWithTheme(<Card sx={{ backgroundColor: 'red' }} />);
      expect(screen.getByTestId('card')).toHaveStyle({ backgroundColor: 'red' });
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      RenderWithTheme(<Card ref={ref} />);
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
  });

  describe('CardHeader Component', () => {
    it('renders with title and subheader', () => {
      RenderWithTheme(
        <CardHeader 
          title="Test Title" 
          subheader="Test Subheader" 
        />
      );
      expect(screen.getByText('Test Title')).toBeInTheDocument();
      expect(screen.getByText('Test Subheader')).toBeInTheDocument();
    });

    it('applies custom styles through sx prop', () => {
      RenderWithTheme(
        <CardHeader 
          title="Test" 
          wrapperSx={{ backgroundColor: 'red' }} 
        />
      );
      expect(screen.getByTestId('card-header')).toHaveStyle({ 
        backgroundColor: 'red' 
      });
    });
  });

  describe('CardBody Component', () => {
    it('renders with custom padding', () => {
      RenderWithTheme(<CardBody padding="20px" />);
      expect(screen.getByTestId('card-body')).toHaveStyle({ padding: '20px' });
    });

    it('renders with default padding when not specified', () => {
      RenderWithTheme(<CardBody />);
      expect(screen.getByTestId('card-body')).toHaveStyle({ padding: '0px 16px' });
    });

    it('renders with children', () => {
      RenderWithTheme(
        <CardBody>
          <div data-testid="test-child">Test Content</div>
        </CardBody>
      );
      expect(screen.getByTestId('test-child')).toBeInTheDocument();
    });
  });

  describe('CardFooter Component', () => {
    it('renders with children', () => {
      RenderWithTheme(
        <CardFooter>
          <div data-testid="test-child">Test Content</div>
        </CardFooter>
      );
      expect(screen.getByTestId('test-child')).toBeInTheDocument();
    });

    it('has transparent background by default', () => {
      RenderWithTheme(<CardFooter />);
      expect(screen.getByTestId('card-footer')).toHaveStyle({ backgroundColor: 'transparent' });
    });
  });

  describe('Complete Card with all components', () => {
    it('renders a complete card with all components', () => {
      RenderWithTheme(
        <Card>
          <CardHeader 
            title="Complete Card" 
            subheader="Testing all components together" 
          />
          <CardBody>
            <div data-testid="card-content">Main content</div>
          </CardBody>
          <CardFooter>
            <div>Footer content</div>
          </CardFooter>
        </Card>
      );

      expect(screen.getByText('Complete Card')).toBeInTheDocument();
      expect(screen.getByText('Testing all components together')).toBeInTheDocument();
      expect(screen.getByTestId('card-content')).toBeInTheDocument();
      expect(screen.getByText('Footer content')).toBeInTheDocument();
    });

    it('maintains proper component hierarchy', () => {
      RenderWithTheme(
        <Card>
          <CardHeader title="Test Card" />
          <CardBody>
            <div data-testid="content">Content</div>
          </CardBody>
          <CardFooter>
            <div data-testid="footer">Footer</div>
          </CardFooter>
        </Card>
      );

      const card = screen.getByTestId('card');
      const header = screen.getByTestId('card-header');
      const content = screen.getByTestId('content');
      const footer = screen.getByTestId('footer');

      // Check if components are in the correct order
      expect(card.firstChild).toBe(header);
      expect(header.nextSibling).toContainElement(content);
      expect(content.parentElement?.nextSibling).toContainElement(footer);
    });

    it('applies custom styles to all components', () => {
      RenderWithTheme(
        <Card sx={{ backgroundColor: 'red' }}>
          <CardHeader 
            title="Test"
            wrapperSx={{ backgroundColor: 'blue' }} 
          />
          <CardBody>
            <div data-testid="content">Content</div>
          </CardBody>
          <CardFooter>
            <div data-testid="footer">Footer</div>
          </CardFooter>
        </Card>
      );

      expect(screen.getByTestId('card')).toHaveStyle({ 
        backgroundColor: 'red' 
      });
    });

    it('handles nested components correctly', () => {
      RenderWithTheme(
        <Card>
          <CardHeader title="Nested Components" />
          <CardBody>
            <Card>
              <CardBody>
                <div data-testid="nested-content">Nested Content</div>
              </CardBody>
            </Card>
          </CardBody>
          <CardFooter>
            <div data-testid="footer">Footer</div>
          </CardFooter>
        </Card>
      );

      expect(screen.getByText('Nested Components')).toBeInTheDocument();
      expect(screen.getByTestId('nested-content')).toBeInTheDocument();
      expect(screen.getByTestId('footer')).toBeInTheDocument();
    });
  });
});