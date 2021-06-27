const clockContainer= document.querySelector(".js-clock");
const clockTitle= clockContainer.querySelector("h1");

function getTime(){
    /*
    //문서 객체 선택
    var clock= document.getElementById('clock');
    //1초마다 함수 실행
    setInterval(function(){
        var now=new Date();
        clock.innerHTML= now.toString();
    }, 1000);
    */
    
    const date= new Date(); //Date 객체 생성!
    const minutes= date.getMinutes();
    const hours= date.getHours();
    const seconds= date.getSeconds();
    clockTitle.innerText=`${hours<10? `0${hours}`: hours}:${
        minutes<10 ? `0${minutes}`: minutes}:${
            seconds<10? `0${seconds}`: seconds}`;
    
}

function init(){
    setInterval(getTime,1000);
}

init();