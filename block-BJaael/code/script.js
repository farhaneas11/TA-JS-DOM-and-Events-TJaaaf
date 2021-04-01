function generateRandomColor()
{
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}
function generateRandomNumber()
{
    var randomNumber = Math.floor(Math.random() * 500) + 1
    return randomNumber
}


for(i = 0; i < 500; i++){
    var div = document.createElement("div");
        div.className = "box"
        document.querySelector("#container").appendChild(div);

        div.innerText = generateRandomNumber()        
}
var container = document.getElementById("container")

container.addEventListener('mousemove', () => {
    console.log("random")
    let random = document.querySelectorAll(".box")
    for(rando of random){
        rando.style.backgroundColor = generateRandomColor()
        rando.innerText = generateRandomNumber()   
    }
    
})