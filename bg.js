const body= document.querySelector("body");
const IMG_NUMBER= 10;

/*
function handleImgLoad(){
    console.log("finished loading");
}
*/

function paintImage(imgNumber){
    const image= new Image();
    image.src= `images/bg${imgNumber +1}.jpg`;
    image.classList.add("bgImage"); //css로 저장하기 위해 class추가
    //body.appendChild(image); //자식요소로 맨뒤에 추가
    body.prepend(image); //자식요소로 맨앞에 추가

    //body.appendChild(image);
    //image.addEventListener("loaded", handleImgLoad);
}

function genRandom(){
    const number= Math.floor(Math.random()*IMG_NUMBER);
    return number;
}

function init(){
    const randomNuber= genRandom();
    paintImage(randomNuber);
}

init();
