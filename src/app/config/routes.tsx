import { RouteObject } from "react-router-dom";
import { AppRoutes, RoutePathes } from "shared/types/routes";

import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";

export const routeConfig: Record<AppRoutes, RouteObject> = {
  [AppRoutes.MAIN]: {
    path: RoutePathes[AppRoutes.MAIN],
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePathes[AppRoutes.ABOUT],
    element: <AboutPage />,
  },
};
