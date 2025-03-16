import { screen, fireEvent } from "@testing-library/react";

import Button from "../buttons/Button";
import { BUTTON_SIZE, BUTTON_TYPE } from "../../enums/partials.enum";

import { RenderWithTheme } from "@/lib/utils"

describe("Button Component", () => {
  test("renders button with label", () => {
    RenderWithTheme(<Button label="Click Me" />);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });
  test("applies correct styles for primary button", () => {
    RenderWithTheme(<Button label="Primary" buttontype={BUTTON_TYPE.PRIMARY} />);
    const button = screen.getByText("Primary");
    expect(button).toHaveClass("MuiButton-contained");
  });

  test("applies correct styles for secondary button", () => {
    RenderWithTheme(<Button label="Secondary" buttontype={BUTTON_TYPE.SECONDARY} />);
    const button = screen.getByText("Secondary");
    expect(button).toHaveClass("MuiButton-outlined");
  });

  test("calls onClick function when clicked", () => {
    const handleClick = jest.fn();
    RenderWithTheme(<Button label="Click Me" onClick={handleClick} />);
    fireEvent.click(screen.getByText("Click Me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("renders different button sizes", () => {
    RenderWithTheme(<Button label="Big" buttonsize={BUTTON_SIZE.BIG} />);
    RenderWithTheme(<Button label="Small" buttonsize={BUTTON_SIZE.SMALL} />);
    expect(screen.getByText("Big")).toBeInTheDocument();
    expect(screen.getByText("Small")).toBeInTheDocument();
  });
});
