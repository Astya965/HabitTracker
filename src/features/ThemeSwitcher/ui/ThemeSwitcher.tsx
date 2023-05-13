import { FC } from "react";
import { useTheme } from "entities/theme";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { ThemeIcon } from "../svg/ThemeIcon";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.ICON}
      className={className}
      onClick={toggleTheme}
    >
      <ThemeIcon />
    </Button>
  );
};
