import { lazy } from "react";

const AboutPageAsync = lazy(
  () => import(/* webpackChunkName: "about_page"*/ "./AboutPage")
);

export default AboutPageAsync;
