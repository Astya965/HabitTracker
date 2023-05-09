import { Suspense } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import AboutPageAsync from "./pages/AboutPage/AboutPage.async";
import MainPageAsync from "./pages/MainPage/MainPage.async";

const App = () => (
  <>
    <div>
      <Link to="/">MAIN </Link>
      <Link to="/about">ABOUT </Link>
    </div>
    <Suspense fallback={"Loading..."}>
      <Routes>
        <Route path="/about" element={<AboutPageAsync />} />
        <Route path="/" element={<MainPageAsync />} />
      </Routes>
    </Suspense>
  </>
);

export default App;
