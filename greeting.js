const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

//이름 저장
function saveName(text){
    localStorage.setItem(USER_LS, text);
}

//누군가 submit했을 때
function handleSubmit(event){
    //새로고침했을때 없어짐(default) 방지
    event.preventDefault();
    const currentValue=input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    //텍스트 색칠하려면 폼을 숨겨야 함
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello, ${text}`;
}

//localStorage에 이름을 기억해두는 함수
function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else { //이름을 색칠하자
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();
