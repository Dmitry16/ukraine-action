import { AVATAR_SIZE, AVATAR_ICON_SIZE } from "../../enums/partials.enum";
import Avatar from "./Avatar";
import theme from "../../theme/theme";

import { RenderWithTheme } from "@/lib/utils"

describe("Avatar Component", () => {
  it("renders correctly with default props", () => {
    const { getByRole } = RenderWithTheme(
        <Avatar />
    );
    const avatar = getByRole("img"); // Assuming MuiAvatar renders as an img tag

    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveStyle(`width: ${AVATAR_SIZE.MEDIUM}`);
    expect(avatar).toHaveStyle(`height: ${AVATAR_SIZE.MEDIUM}`);
  });

  it("applies correct styles for each size", () => {
    Object.entries(AVATAR_SIZE).forEach(([key, size]) => {
      const { getByRole } = RenderWithTheme(
        <Avatar size={size as AVATAR_SIZE} />
      );
      const avatar = getByRole("img");

      expect(avatar).toHaveStyle(`width: ${size}`);
      expect(avatar).toHaveStyle(`height: ${size}`);
    });
  });

  it("renders with a square variant and applies borderRadius correctly", () => {
    const { getByRole } = RenderWithTheme(
        <Avatar size={AVATAR_SIZE.LARGE} variant="square" />
    );
    const avatar = getByRole("img");

    expect(avatar).toHaveStyle("border-radius: 5px");
  });

  it("applies default circular borderRadius when variant is not 'square'", () => {
    const { getByRole } = RenderWithTheme(
        <Avatar size={AVATAR_SIZE.LARGE} />
    );
    const avatar = getByRole("img");

    expect(avatar).toHaveStyle("border-radius: 50%");
  });

  it("applies the correct background color from the theme", () => {
    const { getByRole } = RenderWithTheme(
        <Avatar />
    );
    const avatar = getByRole("img");

    expect(avatar).toHaveStyle(`background-color: ${theme.navigation.blue[0]}`);
  });

  it("applies correct icon size based on avatar size", () => {
    Object.entries(AVATAR_SIZE).forEach(([key, size]) => {
      const iconSize = AVATAR_ICON_SIZE[key as keyof typeof AVATAR_ICON_SIZE];

      const { container } = RenderWithTheme(
        <Avatar size={size as AVATAR_SIZE} />
      );

      const icon = container.querySelector(".MuiSvgIcon-root"); // Target the icon inside the Avatar

      expect(icon).toHaveStyle(`width: ${iconSize.width}`);
      expect(icon).toHaveStyle(`height: ${iconSize.height}`);
      expect(icon).toHaveStyle(`color: ${theme.navigation.blue[1]}`);
    });
  });
});
