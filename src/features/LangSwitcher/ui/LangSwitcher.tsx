import { FC } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/helpers/classNames";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { LOCAL_STORAGE_LANG_KEY } from "shared/types/i18n";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { i18n } = useTranslation();

  const handleTranslation = () => {
    const newLang = i18n.language === "en" ? "ru" : "en";
    localStorage.setItem(LOCAL_STORAGE_LANG_KEY, newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      theme={ThemeButton.OUTLINE}
      className={className}
      onClick={handleTranslation}
    >
      EN/RU
    </Button>
  );
};
