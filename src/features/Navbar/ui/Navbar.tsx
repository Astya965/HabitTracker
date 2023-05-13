import { FC } from "react";

import { classNames } from "helpers/classNames";
import { Link } from "shared/ui/Link/Link";

import cls from "./Navbar.m.scss";
import { ThemeSwitcher } from "features/ThemeSwitcher";
import { AppRoutes, RoutePathes } from "shared/types/routes";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Link to={RoutePathes[AppRoutes.MAIN]}>MAIN </Link>
      <Link to={RoutePathes[AppRoutes.ABOUT]}>ABOUT </Link>
      <ThemeSwitcher />
    </div>
  );
};
