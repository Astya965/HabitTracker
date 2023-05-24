import { FC } from "react";

import { classNames } from "shared/helpers/classNames";
import { Link } from "shared/ui/Link/Link";
import { AppRoutes, RoutePathes } from "shared/types/routes";

import cls from "./Navbar.m.scss";
import { ThemeSwitcher } from "features/ThemeSwitcher";
import { LangSwitcher } from "features/LangSwitcher";
import { useTranslation } from "react-i18next";
interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Link to={RoutePathes[AppRoutes.MAIN]}>{t("MAIN")}</Link>
      <Link to={RoutePathes[AppRoutes.ABOUT]}>{t("ABOUT")} </Link>
      <ThemeSwitcher />
      <LangSwitcher />
    </div>
  );
};
