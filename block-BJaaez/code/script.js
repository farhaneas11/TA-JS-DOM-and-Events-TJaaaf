function main(){

    let inputText = document.querySelector('#text');
    let root = document.querySelector('ul');
    
    let all = document.querySelector('.all');
    let active = document.querySelector('.active');
    let completed = document.querySelector('.completed');
    let dlte = document.querySelector('.delete');
    
    let allTodo = localStorage.getItem("Alltodos") ? JSON.parse(localStorage.getItem("Alltodos")) : [];
    
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
            localStorage.setItem("Alltodos",JSON.stringify(allTodo));
        }    
        
    }
    
    
    function handleDelete(event){
        let id=event.target.dataset.id;
        allTodo.splice(id ,1);
        createUI();
        localStorage.setItem("Alltodos",JSON.stringify(allTodo));
    }
    
    function handleToggle(event){
        let id = event.target.dataset.id;
        allTodo[id].isDone = !allTodo[id].isDone;
        createUI();
        localStorage.setItem("Alltodos",JSON.stringify(allTodo));
    }
    
    function createUI(data = allTodo){
        root.innerHTML ="";
        data.forEach((todo,index)=> {
            let li = document.createElement('li')
            let input = document.createElement('input');
            input.type = "checkbox";
            input.checked = todo.isDone;
            input.setAttribute("data-id",index);
            input.addEventListener('input',handleToggle);
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
    
    
    inputText.addEventListener("keyup",handleEvent);
    createUI();
    
    let activebtn = "all";
    
    function updatebtn(btn = activebtn){
        all.classList.remove("selected");
        active.classList.remove("selected");
        completed.classList.remove("selected");
        if(btn == "all"){
            all.classList.add("selected");
        }
        if(btn == "active"){
            active.classList.add("selected");
        }
        if(btn == "completed"){
            completed.classList.add("selected");
        }
    }
    updatebtn();
    
    
    all.addEventListener("click",()=> {
        createUI(allTodo);
        activebtn = "all";
        updatebtn();
        localStorage.setItem("Alltodos",JSON.stringify(allTodo));
    })
    
    completed.addEventListener("click",()=>{
        let compbtn = allTodo.filter((todo)=> todo.isDone);
        activebtn = "completed"
        createUI(compbtn);   
        updatebtn();
    })
    
    active.addEventListener("click",()=>{
        let activbtn = allTodo.filter((todo)=> !todo.isDone);
        activebtn = "active"
        createUI(activbtn);   
        updatebtn();
    })
    
    dlte.addEventListener("click",()=> {
        let dltbtn = allTodo.filter((todo) => !todo.isDone );
           
        createUI();    
        localStorage.setItem("Alltodos",JSON.stringify(allTodo));
    })
    
    
    
    
    
    }
    
    main();