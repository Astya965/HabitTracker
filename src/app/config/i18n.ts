import i18next from "i18next";
import I18NextHttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import { LOCAL_STORAGE_LANG_KEY } from "shared/types/i18n";

i18next
  .use(I18NextHttpBackend)
  .use(initReactI18next)
  .init({
    lng: localStorage.getItem(LOCAL_STORAGE_LANG_KEY) ?? "en", // if you're using a language detector, do not define the lng option
    fallbackLng: false,
    debug: __IS_DEV__,

    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  });
