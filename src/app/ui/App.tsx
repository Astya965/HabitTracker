import "../styles/index.scss";
import { AppRoutes } from "./AppRoutes";

import { useTheme } from "entities/theme";
import { Navbar } from "features/Navbar";
import { ThemeSwitcher } from "features/ThemeSwitcher";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <AppRoutes />
      <ThemeSwitcher />
    </div>
  );
};

export default App;
