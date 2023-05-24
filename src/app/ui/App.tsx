import "../styles/index.scss";
import { AppRoutes } from "./AppRoutes";

import { useTheme } from "entities/theme";
import { Suspense } from "react";
import { Header } from "widgets/Header";
import { Sidebar } from "widgets/Sidebar";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Suspense fallback="">
        <Header />
        <main className="page-main">
          <Sidebar />
          <div className="page-content">
            <AppRoutes />
          </div>
        </main>
      </Suspense>
    </div>
  );
};

export default App;
