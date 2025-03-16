import {screen } from '@testing-library/react'

import EventBubble from './EventBubble'

import { RenderWithTheme } from "@/lib/utils"

describe('EventBubble', () => {
    test('renders with text and icon', () => {
        RenderWithTheme(<EventBubble checked text="Test Event" icon={<span>Icon</span>} />);
        expect(screen.getByText('Test Event')).toBeInTheDocument();
        expect(screen.getByText('Icon')).toBeInTheDocument();
    });

    test('renders with checked state', () => {
        RenderWithTheme(<EventBubble text="Checked Event" checked={true} />);
        expect(screen.getByText('Checked Event')).toHaveStyle('color: #2673F0');
    });

    test('renders with unchecked state', () => {
        RenderWithTheme(<EventBubble text="Unchecked Event" checked={false} />);
        expect(screen.getByText('Unchecked Event')).toHaveStyle('color: #606060');
    });
}); 