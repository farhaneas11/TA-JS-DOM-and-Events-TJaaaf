let userroot = document.querySelector(".playericon");
let computerroot = document.querySelector(".computericon");

let dataset = [
    {
        name:"rock",
        beats:"scissors",
    },
    {
        name:"scissors",
        beats:"paper",
    },
    {
        name:"paper",
        beats:"rock",
    },

];

function randomselect(max = 3){    
    return Math.floor(Math.random()*max);    
}



function computerlayout(){
    dataset.forEach((icon)=>{
        let li = document.createElement('li');
        let i = document.createElement('i');
        i.className = `fa fa-hand-${icon.name}-o`;
        li.style.listStyleType = 'none';
        i.style.fontSize = '50px';       
        
        li.append(i);
        userroot.append(li);
    })

}
computerlayout();
function playerlayout(){
    dataset.forEach((icon)=>{
        let li = document.createElement('li');
        let i = document.createElement('i');
        i.className = `fa fa-hand-${icon.name}-o`;
        li.style.listStyleType = 'none';
        i.style.fontSize = '50px';
        li.append(i);
        computerroot.append(li);
    })
}
playerlayout();