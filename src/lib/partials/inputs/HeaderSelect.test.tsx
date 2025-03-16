import { render, screen, fireEvent } from '@testing-library/react'
import HeaderSelect from './HeaderSelect'

describe('HeaderSelect Component', () => {
    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
    ];

    test('renders HeaderSelect with options', () => {
        render(<HeaderSelect options={options} />);
        
        // Check if the select element is in the document
        const selectElement = screen.getByRole('button');
        expect(selectElement).toBeInTheDocument();

        // Check if options are rendered
        fireEvent.mouseDown(selectElement);
        options.forEach(option => {
            expect(screen.getByText(option.label)).toBeInTheDocument();
        });
    });

    test('selects an option', () => {
        render(<HeaderSelect options={options} />);
        
        const selectElement = screen.getByRole('button');
        fireEvent.mouseDown(selectElement);
        
        // Select the first option
        fireEvent.click(screen.getByText(options[0].label));
        
        // Check if the selected option is displayed
        expect(selectElement).toHaveTextContent(options[0].label);
    });
}); 