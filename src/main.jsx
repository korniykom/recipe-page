import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import Recipe from "./Recipe";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Recipe />
  </StrictMode>,
);
