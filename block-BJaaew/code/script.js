let ul = document.querySelector('.wrap');
let input = document.querySelector('#search');
let select = document.querySelector('.names');

let peopleAll = got.houses.reduce((acc,cv)=>{
    acc = acc.concat(cv.people);
    return acc;
},[]);

let allHouse = got.houses.map((p)=>p.name);
let activehouse = "";

function createTag(tags = []){
    select.innerHTML = "";
    tags.forEach((tag)=>{
        let li = document.createElement('li');
        li.innerText = tag;
        li.addEventListener("click",()=> {
            activehouse = tag;
            let peoplehouse = got.houses.find((house)=>house.name === tag ).people || [];
            createcards(peoplehouse);
        })
        select.append(li);
    })
}
createTag(allHouse);



function createcards(data =[]){
    ul.innerHTML  = "";
    data.forEach((person)=> {
        let li = document.createElement('li');
        let img = document.createElement('img');
        img.alt = person.name;
        img.src = person.image;
        let h2 = document.createElement('h2');
        h2.innerText=person.name;
        let p = document.createElement('p');
        p.innerText=person.description;
        let button = document.createElement('button');
        button.innerText = "Know More";
        li.append(img , h2 , p , button);

        ul.append(li);
    });
    
}
createcards(peopleAll);



function searchpeople(event){
    let searchtext = event.target.value;
    let filtpeople = peopleAll.filter((er) =>
     er.name.toLowerCase().inlcudes(searchtext.toLowerCase())
     );
    createcards(filtpeople);
}
input.addEventListener("input",searchpeople);



 
