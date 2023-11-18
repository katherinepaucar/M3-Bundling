import React from "react";
import { createRoot } from "react-dom/client";
import { HelloComponent } from "./helloComponent";
import "./styles.scss";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
  <h1>2 Bundling Opcional Webpack</h1>
    <HelloComponent />
  </>
);