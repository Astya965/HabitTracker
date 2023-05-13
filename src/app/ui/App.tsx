import { Link } from "react-router-dom";

import "../styles/index.scss";
import AppRoutes from "./AppRoutes";

import { useTheme } from "entities/theme";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      Hi!
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div>
        <Link to="/">MAIN </Link>
        <Link to="/about">ABOUT </Link>
      </div>
      <AppRoutes />
    </div>
  );
};

export default App;
