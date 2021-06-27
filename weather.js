const weather= document.querySelector(".js-weather");

const API_KEY="c3dd769feb6d12c540af3ac5805cadb1";
const COORDS= "coords";

//새로고침없이 웹(js)에서 계속 데이터를 가져옴
//then: 데이터가 완전히 들어온 다음 함수 호출
//then한번까지는 network정보만 보이고 body는 안보이므로 JSON데이터가 준비되면
function getWeather(lat,lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    )
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        console.log(json);
        const temperature= json.main.temp;
        const where= json.name;
        weather.innerText= `${temperature}, @${where}`;
    });
}

function saveCoords(coordsObj){
    //stringfy: JSON객체->string객체
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

//local storage에 좌표값이 없을 때에만 위도, 경도 불러오기
function handleGeoSuccess(position){
    //console.log(position);
    const latitude= position.coords.latitude;
    const longitude= position.coords.longitude;
    const coordsObj={
        latitude:latitude,
        longitude:longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handleGeoError(){
    console.log("Can't access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
    const loadedCoords= localStorage.getItem(COORDS);
    if(loadedCoords===null){ 
        askForCoords();
    }else{
        //parse: string객체->JSON객체
        const parsedCoords= JSON.parse(loadedCoords);
        //console.log(parseCoords);
        //network 패널에서 내가 request한 내용을 볼 수 있음
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init(){
    loadCoords();
}
init(); 
