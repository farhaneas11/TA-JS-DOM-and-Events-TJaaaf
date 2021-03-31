let box1 = document.querySelector('.first');
let box2 = document.querySelector('.second');
let text = document.querySelector('.text');

box1.addEventListener("click",function () {
    box1.style.backgroundColor = "#" + ((1<<24)*Math.random() | 0).toString(16);
})
box1.addEventListener("mouseleave",function () {
    box1.style.backgroundColor = '';
})
box2.addEventListener("mouseover",function () {
    box2.style.backgroundColor = "#" + ((1<<24)*Math.random() | 0).toString(16);;
})
box2.addEventListener("mouseleave",function () {
    box2.style.backgroundColor = '';
})
