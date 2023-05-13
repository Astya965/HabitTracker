import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { ThemeProdiver, App } from "app";

render(
  <BrowserRouter>
    <ThemeProdiver>
      <App />
    </ThemeProdiver>
  </BrowserRouter>,
  document.getElementById("root")
);
