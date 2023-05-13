import { FC } from "react";
import { classNames } from "helpers/classNames";
import cls from "./Header.m.scss";
import { Navbar } from "features/Navbar";
import { Link } from "shared/ui/Link/Link";
import { RoutePathes, AppRoutes } from "shared/types/routes";

interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <div className={classNames(cls.header, {}, [className])}>
      <Link to={RoutePathes[AppRoutes.MAIN]}><h1>Habit tracker</h1></Link>
      <Navbar />
    </div>
  );
};
