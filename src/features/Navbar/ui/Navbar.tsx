import { FC } from "react";

import { classNames } from "helpers/classNames";
import { Link } from "shared/ui/Link/Link";

import cls from "./Navbar.m.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Link to="/">MAIN </Link>
      <Link to="/about">ABOUT </Link>
    </div>
  );
};
