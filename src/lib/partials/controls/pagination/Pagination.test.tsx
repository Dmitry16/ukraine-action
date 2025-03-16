import { screen } from "@testing-library/react"

import Pagination from "./Pagination"

import theme from "../../../theme/theme"

import { RenderWithTheme } from "@/lib/utils"

describe("Pagination Component", () => {
  test("renders pagination component", () => {
    RenderWithTheme(<Pagination count={5} page={1} />);

    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  test("applies custom styles", () => {
    RenderWithTheme(<Pagination count={5} page={1} />);
    
    const firstButton = screen.getByRole("button", { name: "1" });
    expect(firstButton).toHaveStyle({
      "color": theme.utilitarian.neutrals.slate,
      "font-size": "14px",
      "font-weight": "500",
      "min-width": "31px",
      "height": "31px",
      "border-radius": "4px",
    });
  });
});