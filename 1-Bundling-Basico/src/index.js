import "./styles.scss";
import img1  from "./images/image1.jpg";

const img = document.createElement('img');
img.src= img1;
document.getElementById('containerImg').appendChild(img);
console.log("Hello webpack zero config!");