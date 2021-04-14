let ul = document.querySelector('.wrap');
let input = document.querySelector('#search');


let peopleAll = got.houses.reduce((acc,cv)=>{
    acc = acc.concat(cv.people);
    return acc;
},[]);


function createcards(data =[]){
    ul.innerHTML  = "";
    peopleAll.forEach((person)=> {
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
    let filtpeople = allpeople.filter((p)=>p.name.toLowerCase().inlcudes(searchtext.toLowerCase()));
    createcards()
}
input.addEventListener('input',searchpeople);



 
