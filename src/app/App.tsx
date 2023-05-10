import { Suspense } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import "./styles/index.scss";

import { AboutPage } from "../pages/AboutPage";
import { MainPage } from "../pages/MainPage";
import { useTheme } from "entities/theme";

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
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
