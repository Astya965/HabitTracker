import { FC, useState } from "react";
import { classNames } from "shared/helpers/classNames";
import cls from "./Sidebar.m.scss";
import { useTranslation } from "react-i18next";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const handleToggle = () => setCollapsed((prev) => !prev);

  return (
    <div
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={handleToggle}>{t("toogle")}</button>
    </div>
  );
};
