import { lazy } from "react";

const MainPageAsync = lazy(
  () => import(/* webpackChunkName: "main_page"*/ "../MainPage")
);

export default MainPageAsync;
