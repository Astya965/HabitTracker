import { Suspense } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import "./styles/index.scss";

import AboutPageAsync from "./pages/AboutPage/AboutPage.async";
import MainPageAsync from "./pages/MainPage/MainPage.async";
import useTheme from "./theme/useTheme";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Toggle Theme</button>
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
    </div>
  );
};

export default App;
