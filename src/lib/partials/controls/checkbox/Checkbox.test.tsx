import { render, screen, fireEvent } from '@testing-library/react'
import Checkbox from './Checkbox'

describe('Checkbox Component', () => {
    test('renders checkbox with default size', () => {
        render(<Checkbox />);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeInTheDocument();
        expect(checkbox).toHaveAttribute('size', 'small');
    });

    test('renders checkbox with custom size', () => {
        render(<Checkbox size="medium" />);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toHaveAttribute('size', 'medium');
    });

    test('checkbox can be checked and unchecked', () => {
        render(<Checkbox />);
        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);
        expect(checkbox).toBeChecked();
        fireEvent.click(checkbox);
        expect(checkbox).not.toBeChecked();
    });
}); 