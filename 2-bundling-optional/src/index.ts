import "./styles.scss";
import img1  from "./images/image1.jpg";
import img2  from "./images/image2.jpg";
const img = document.createElement('img');
img.src= img1;
document.getElementById('containerImg').appendChild(img);
let timer = setInterval(() => {
    if(img.src===img1){
        img.src = img2;
    }else{
        img.src = img1;
    }

}, 5000);
