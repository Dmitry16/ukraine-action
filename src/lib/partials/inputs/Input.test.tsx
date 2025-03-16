import { screen, fireEvent } from "@testing-library/react"

import Input from "./Input"

import { RenderWithTheme } from "@/lib/utils"

describe("Input Component", () => {
  test("renders input field", () => {
    RenderWithTheme(<Input 
      id="test-input"
      label="Test Input" 
      placeholder="Enter test input"
    />);
    expect(screen.getByLabelText("Test Input")).toBeInTheDocument();
  });

  test("handles value changes", () => {
    const handleChange = jest.fn();
    RenderWithTheme(
      <Input
        id="test-input"
        placeholder="Enter test input" 
        label="Test Input"
        onChange={handleChange}
      />
    );
    
    const input = screen.getByLabelText("Test Input");
    fireEvent.change(input, { target: { value: "test value" } });
    expect(handleChange).toHaveBeenCalled();
  });

  test("displays error message when error prop is true", () => {
    const errorMessage = "This field is required";
    RenderWithTheme(
      <Input 
        id="test-input"
        placeholder="Enter test input"
        label="Test Input" 
        error={true}
        helperText={errorMessage}
      />
    );

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });
  test("applies disabled state correctly", () => {
    RenderWithTheme(
      <Input
        id="test-input"
        placeholder="Enter test input"
        label="Test Input"
        disabled
      />
    );
    expect(screen.getByLabelText("Test Input")).toBeDisabled();
  });

  test("handles placeholder text", () => {
    const placeholder = "Enter value here";
    RenderWithTheme(
      <Input
        id="test-input"
        label="Test Input"
        placeholder={placeholder}
      />
    );
    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
  });
});
