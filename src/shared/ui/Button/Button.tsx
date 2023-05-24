import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/helpers/classNames";
import cls from "./Button.m.scss";

export enum ThemeButton {
  DEFAULT = "default",
  OUTLINE = "outline",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = ({
  className,
  theme = ThemeButton.DEFAULT,
  children,
  ...otherProps
}) => (
  <button
    {...otherProps}
    className={classNames(cls.button, {}, [className, cls[theme]])}
  >
    {children}
  </button>
);
