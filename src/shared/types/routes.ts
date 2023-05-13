export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
}

export const RoutePathes: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
};
