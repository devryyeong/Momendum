var title=document.querySelectorAll('h1');

const CLICKED_CLASS="clicked";

/*
function handleClick(){
    //const currentClass=title.className;
    const hasClass=title.classList.contains(CLICKED_CLASS);
    
    if(!hasClass){
        //title.className=CLICKED_CLASS;
        //classList(pointer가 한번 클릭하면 없어지는 문제 해결!)의 
        add와 remove라는 메소드를 쓸 수 있음
        title.classList.add(CLICKED_CLASS);
    }else{
        //title.className="";
        title.classList.remove(CLICKED_CLASS);
    }
}
*/

function handleClick(){
    for(var i=0;i<title.length;i++){
        var ttitle=title[i];
        ttitle.style.color="red";
        //ttitle.classList.toggle(CLICKED_CLASS);
    } 
}

function init(){
    title.addEventListener("click", handleClick);
}
init();
