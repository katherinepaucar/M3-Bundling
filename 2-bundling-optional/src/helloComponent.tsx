import React from "react";
import classes from "./helloComponent.scss"
import img from "./images/image1.jpg"

export const HelloComponent = () => {
  console.log('API_URL',process.env.API_URL)

  return (
    <div>
      <h1 className={classes.colorText}>Hello Component</h1>
      <img src={img} />
    </div>
  );
};