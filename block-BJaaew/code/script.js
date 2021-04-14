let ul = document.querySelector('.wrap');
let input = document.querySelector('#search');


let peopleAll = got.houses.reduce((acc,cv)=>{
    acc = acc.concat(cv.people);
    return acc;
},[]);


let allpeople = peopleAll.map((person)=> {
    return `<li>
    <div id="characters">
      <img src="${person.image}" alt="${person.name}">
      <h2>${person.name}</h2>
      <p>
        ${person.description}
      </p>
      <button>
        Know More
      </button>
    </div>
  </li>`;
});
ul.innerHTML = allpeople.join("");




function searchpeople(){
    let value = event.target.value;
    peopleAll().filter((p)=>p.name);
}


input.addEventListener('keyup',searchpeople);


function peopleFilter(){
    return got.houses.reduce((acc,house)=>{
        acc[house.name]=house.people.map((p)=>p.name);
        return acc;
    },[])
}

 let names =document.querySelector('names');
function displaynames(data , names){
    data.forEach((person)=> {
        let li = document.querySelectorAll('li');
        li.set
    })
}

displaynames(allpeople,names);
names.addEventListener("click",displaynames);
