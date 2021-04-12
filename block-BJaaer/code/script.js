let form = document.querySelector('form');
let userinfo = {};



form.addEventListener("submit",handlesubmit);

function handlesubmit(event){
    event.preventDefault();
    let name = event.target.elements.name;
    let email =event.target.elements.email;
    let movie = event.target.elements.gender;
    let color = event.target.elements.color;
    let rating = event.target.elements.rating;
    let terms = event.target.elements.terms;
    userinfo.name = name.value;
    userinfo.email = email.value;
    userinfo.moviegender = gender.value;
    userinfo.color = color.value;
    userinfo.rating = rating.value;
    userinfo.terms = terms.checked;
    
    document.getElementById('namev').innerHTML = 'Hello ' + userinfo.name;
    document.getElementById('emailv').innerHTML = 'Email : ' + userinfo.email;
    document.getElementById('colorv').innerHTML = 'Color :  ' + userinfo.color;
    document.getElementById('ratingv').innerHTML = 'Rating : ' + userinfo.rating;
    document.getElementById('genrev').innerHTML = 'Bookgenre : ' + userinfo.moviegender + userinfo.color;

    
}


