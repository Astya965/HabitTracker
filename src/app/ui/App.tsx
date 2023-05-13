import "../styles/index.scss";
import { AppRoutes } from "./AppRoutes";

import { useTheme } from "entities/theme";
import { Header } from "widgets/Header";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Header />
      <AppRoutes />
    </div>
  );
};

export default App;
