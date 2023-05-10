import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./app/App";
import ThemeProdiver from "./app/providers/ThemeProvider/ui/ThemeProvider";

render(
  <BrowserRouter>
    <ThemeProdiver>
      <App />
    </ThemeProdiver>
  </BrowserRouter>,
  document.getElementById("root")
);
