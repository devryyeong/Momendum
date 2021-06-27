const toDoForm= document.querySelector(".js-toDoForm"),
    toDoInput= toDoForm.querySelector("input"),
    toDoList= document.querySelector(".js-toDoList");

const TODO_LS= 'toDos';

//filter: 배열의 모든 요소에서 함수를 실행하고, 조건에 true인 것만 가지고 새로운 배열을 만듦
function filterFn(toDo){
    //
}

let toDos= []; //해야할 일들을 배열로 저장

//투두리스트 지우려면,
//1. localStorage에서 지우고 2. 저장해야 함.
//지우되, 내가 누른게 뭔지 알아야함->새로고침하면 다시 생겨ㅠ
function deleteToDo(event){
    const btn= event.target;
    const li= btn.parentNode;
    toDoList.removeChild(li);

    //함수를 하나하나 실행시킴
    const cleanToDos= toDos.filter(function(toDo){
        //toDo.id=정수, li.id=문자!! 변환 필요(parseInt)
        return toDo.id !== parseInt(li.id); 
    });
    toDos= cleanToDos;
    saveToDos();
}

function saveToDos(){
    //JSON.stringfy: javascript object를 string으로 바꿔줌
    localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    //console.log(text); (Debuging)
    //element를 생성해야 함(이름: li)
    const li= document.createElement("li");
    const delBtn= document.createElement("button");
    const span= document.createElement("span");
    const newId= toDos.length+1;
    delBtn.innerText="❌";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText= text;
    li.appendChild(span); //뭔가를 그의 부모 element에 넣음
    li.appendChild(delBtn);
    li.id= newId;
    toDoList.appendChild(li);

    const toDoObj= {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault ();
    const currentValue= toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}

function loadToDos(){
    /*
    const toDos= localStorage.getItem(TODO_LS);
    if(toDos!==null){
        //nothing
    }
    */
    const loadedToDos= localStorage.getItem(TODO_LS);
    if(loadedToDos!==null){
        const parsedToDos= JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();