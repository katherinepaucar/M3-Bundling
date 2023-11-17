import "./styles.scss";
import img1  from "./images/image1.jpg";
import img2  from "./images/image2.jpg";
import React from "react";
import { createRoot } from "react-dom/client";
import { HelloComponent } from "./helloComponent";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <HelloComponent />
  </div>
);