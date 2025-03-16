import { render, screen, fireEvent } from '@testing-library/react'
import Tabs from './Tabs'
import TabPanel from './TabPanel'

const mockTabs = [
    { label: 'Tab 1', icon: <span>🔹</span> },
    { label: 'Tab 2', icon: <span>🔸</span> },
];

describe('Tabs Component', () => {
    test('renders tabs correctly', () => {
        render(<Tabs tabs={mockTabs} value={0} onChange={() => {}} />);
        
        expect(screen.getByText('Tab 1')).toBeInTheDocument();
        expect(screen.getByText('Tab 2')).toBeInTheDocument();
    });

    test('changes tab on click', () => {
        const handleChange = jest.fn();
        render(<Tabs tabs={mockTabs} value={0} onChange={handleChange} />);
        
        fireEvent.click(screen.getByText('Tab 2'));
        
        expect(handleChange).toHaveBeenCalled();
    });

    test('applies selected styles to the active tab', () => {
        const { container } = render(<Tabs tabs={mockTabs} value={0} onChange={() => {}} />);
        
        const selectedTab = container.querySelector('.Mui-selected');
        expect(selectedTab).toBeInTheDocument();
    });
});

describe('TabPanel Component', () => {
    test('renders TabPanel correctly', () => {
        render(
            <>
                <Tabs tabs={mockTabs} value={0} onChange={() => {}} />
                <TabPanel value={0} index={0}>
                    Content for Tab 1
                </TabPanel>
                <TabPanel value={0} index={1}>
                    Content for Tab 2
                </TabPanel>
            </>
        );

        // Check if the content for Tab 1 is visible
        expect(screen.getByText('Content for Tab 1')).toBeVisible();
        // Check if the content for Tab 2 is not visible
        expect(screen.queryByText('Content for Tab 2')).not.toBeVisible();
    });

    test('shows the correct TabPanel based on selected tab', () => {
        const { rerender } = render(
            <>
                <Tabs tabs={mockTabs} value={0} onChange={() => {}} />
                <TabPanel value={0} index={0}>
                    Content for Tab 1
                </TabPanel>
                <TabPanel value={0} index={1}>
                    Content for Tab 2
                </TabPanel>
            </>
        );

        // Initially, Tab 1 content should be visible
        expect(screen.getByText('Content for Tab 1')).toBeVisible();

        // Change to Tab 2
        rerender(
            <>
                <Tabs tabs={mockTabs} value={1} onChange={() => {}} />
                <TabPanel value={1} index={0}>
                    Content for Tab 1
                </TabPanel>
                <TabPanel value={1} index={1}>
                    Content for Tab 2
                </TabPanel>
            </>
        );

        // Now, Tab 2 content should be visible
        expect(screen.getByText('Content for Tab 2')).toBeVisible();
        // Tab 1 content should not be visible
        expect(screen.queryByText('Content for Tab 1')).not.toBeVisible();
    });
});