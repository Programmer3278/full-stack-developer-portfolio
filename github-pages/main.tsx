// Plain React entry used only for the static GitHub Pages build (see vite.pages.config.ts).
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Portfolio } from "../src/portfolio/Portfolio";
import "../src/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Portfolio />
  </StrictMode>,
);
