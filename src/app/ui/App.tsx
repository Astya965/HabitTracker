import { Link } from "react-router-dom";

import "../styles/index.scss";
import AppRoutes from "./AppRoutes";

import { useTheme } from "entities/theme";
import { Navbar } from "widgets/Navbar";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <AppRoutes />
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default App;
