import { screen, fireEvent } from '@testing-library/react'

import theme from '../../../theme/theme'

import ZoomButton from './ZoomButton'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

import { RenderWithTheme } from "@/lib/utils"

describe('ZoomButton Component', () => {
  it('renders zoom in and zoom out buttons', () => {
    RenderWithTheme(<ZoomButton />);
    expect(screen.getByRole('button', { name: /add/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /remove/i })).toBeInTheDocument();
  });

  it('renders a divider between buttons', () => {
    RenderWithTheme(<ZoomButton />);
    expect(screen.getByRole('separator')).toBeInTheDocument();
  });

  it('calls onZoomIn when the add button is clicked', () => {
    const onZoomInMock = jest.fn();
    RenderWithTheme(<ZoomButton onZoomIn={onZoomInMock} />);
    fireEvent.click(screen.getByRole('button', { name: /add/i }));
    expect(onZoomInMock).toHaveBeenCalled();
  });

  it('calls onZoomOut when the remove button is clicked', () => {
    const onZoomOutMock = jest.fn();
    RenderWithTheme(<ZoomButton onZoomOut={onZoomOutMock} />);
    fireEvent.click(screen.getByRole('button', { name: /remove/i }));
    expect(onZoomOutMock).toHaveBeenCalled();
  });

  it('applies correct styles to the icon buttons', () => {
    RenderWithTheme(<ZoomButton />);
    screen.getByRole('button', { name: /add/i });
    screen.getByRole('button', { name: /remove/i });
    const addIcon = screen.getByTestId(AddIcon.muiName);
    const removeIcon = screen.getByTestId(RemoveIcon.muiName);

    expect(addIcon).toHaveStyle(`color: ${theme.utilitarian.neutrals.slate}`);
    expect(removeIcon).toHaveStyle(`color: ${theme.utilitarian.neutrals.slate}`);
  });

  it('applies correct hover styles to the icon buttons', () => {
    RenderWithTheme(<ZoomButton />);
    const addButton = screen.getByRole('button', { name: /add/i });
    screen.getByRole('button', { name: /remove/i });
    fireEvent.mouseEnter(addButton);
    fireEvent.mouseEnter(screen.getByTestId(AddIcon.muiName));
    expect(addButton).toHaveStyle(`background-color: ${theme.navigation.blue[2]}`);
    expect(screen.getByTestId(AddIcon.muiName)).toHaveStyle(`color: ${theme.utilitarian.gray[0]}`);

    fireEvent.mouseLeave(addButton);
    fireEvent.mouseLeave(screen.getByTestId(AddIcon.muiName));
    expect(addButton).not.toHaveStyle(`background-color: ${theme.navigation.blue[2]}`);
    expect(screen.getByTestId(AddIcon.muiName)).toHaveStyle(`color: ${theme.utilitarian.neutrals.slate}`);
  });

  it('applies correct styles to the divider', () => {
    RenderWithTheme(<ZoomButton />);
    const divider = screen.getByRole('separator');
    expect(divider).toHaveStyle(`color: ${theme.utilitarian.gray[20]}`);
  });

  it('applies custom sx props to the card', () => {
    RenderWithTheme(<ZoomButton sx={{ width: 100 }} />);
    const card = screen.getByRole('region');
    expect(card).toHaveStyle(`width: 100px`);
  });

  it('renders a card with correct default dimensions', () => {
    RenderWithTheme(<ZoomButton />);
    const card = screen.getByRole('region');
    expect(card).toHaveStyle(`width: 72px`);
    expect(card).toHaveStyle(`height: 35px`);
  });
});