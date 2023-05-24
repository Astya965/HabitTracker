import { FC } from "react";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import { classNames } from "shared/helpers/classNames";
import cls from "./Link.m.scss";

export enum LinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface LinkProps extends RouterLinkProps {
  className?: string;
  theme?: LinkTheme;
}

export const Link: FC<LinkProps> = ({
  to,
  className,
  children,
  theme = LinkTheme.PRIMARY,
  ...otherProps
}) => {
  return (
    <RouterLink
      {...otherProps}
      to={to}
      className={classNames(cls.link, {}, [cls[theme], className])}
    >
      {children}
    </RouterLink>
  );
};
