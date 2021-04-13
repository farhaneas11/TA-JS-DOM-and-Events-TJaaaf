let inputText = document.querySelector('#text');
let root = document.querySelector('ul');


let allTodo = [];

function handleEvent(event){
    let value = event.target.value;
    console.log(event.keyCode)
    if(event.keyCode === 13 && value !== ""){
        let todo = {
            name : value,
            isDone : false,
        };
        allTodo.push(todo);
        event.target.value = "";
        createUI();
    }    
}
inputText.addEventListener("keyup",handleEvent);

function handleDelete(event){
    let id=event.target.dataset.id;
    allTodo.splice(id ,1);
    createUI();
}



function createUI(){
    root.innerHTML ="";
    allTodo.forEach((todo,index)=> {
        let li = document.createElement('li')
        let input = document.createElement('input');
        input.type = "checkbox";
        input.checked = todo.isDone;
        let p = document.createElement('p');
        p.innerText = todo.name;
        let span = document.createElement('button');
        span.innerText = "X";
        span.setAttribute("data-id",index)
        span.addEventListener("click",handleDelete)

        li.append(input , p ,span);
        root.append(li);
    });
}