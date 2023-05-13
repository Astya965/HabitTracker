import { Suspense } from "react";
import { useRoutes } from "react-router-dom";

import { routeConfig } from "../config/routes";

const AppRoutes = () => {
  const routes = useRoutes(Object.values(routeConfig));

  return <Suspense fallback={"Loading..."}>{routes}</Suspense>;
};

export default AppRoutes;
