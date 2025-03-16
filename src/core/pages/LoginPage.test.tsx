import { screen, fireEvent, waitFor } from '@testing-library/react';
import LoginPage from './LoginPage';
import userEvent from '@testing-library/user-event';

import { RenderWithTheme } from "@/lib/utils"

describe('LoginPage', () => {
  it('renders login form with all elements', () => {
    RenderWithTheme(<LoginPage />);
    
    expect(screen.getByPlaceholderText('Enter e-mail')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Forgot Password?' })).toBeInTheDocument();
  });

  it('shows validation errors for empty form submission', async () => {
    RenderWithTheme(<LoginPage />);
    
    const submitButton = screen.getByRole('button', { name: 'Login' });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Email is required')).toBeInTheDocument();
      expect(screen.getByText('Password is required')).toBeInTheDocument();
    });
  });

  it('shows error for invalid email format', async () => {
    RenderWithTheme(<LoginPage />);
    
    const emailInput = screen.getByPlaceholderText('Enter e-mail');
    await userEvent.type(emailInput, 'invalid-email');

    const submitButton = screen.getByRole('button', { name: 'Login' });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Wrong email format')).toBeInTheDocument();
    });
  });

  it('handles successful form submission', async () => {
    const consoleSpy = jest.spyOn(console, 'log');
    RenderWithTheme(<LoginPage />);

    const emailInput = screen.getByPlaceholderText('Enter e-mail');
    const passwordInput = screen.getByPlaceholderText('Enter password');
    const submitButton = screen.getByRole('button', { name: 'Login' });
    
    await userEvent.type(emailInput, 'test@example.com');
    await userEvent.type(passwordInput, 'password123');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password123'
      });
    });

    consoleSpy.mockRestore();
  });

  it('has correct styling for the card', () => {
    RenderWithTheme(<LoginPage />);
    
    const card = screen.getByTestId('card');
    expect(card).toHaveStyle({
      width: '512px',
      padding: '0 61px 60px'
    });
  });

  it('handles forgot password button click', () => {
    RenderWithTheme(<LoginPage />);
    
    const forgotPasswordButton = screen.getByText('Forgot Password?');
    expect(forgotPasswordButton).toHaveAttribute('type', 'button');
    expect(forgotPasswordButton).toBeEnabled();
  });
}); 