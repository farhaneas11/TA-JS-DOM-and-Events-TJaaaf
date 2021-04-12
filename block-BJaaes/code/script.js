let form = document.querySelector('form')

let namerror = ""
let usererror = "";
let emailerror = "";
let passerror = "";
let numerror ="";

function containnumber(num){
    return num.split('').some((e)=>Number(e));
}
function containstring(str){
    return str.split('').some((s)=> String(s));
}
function containsymbol(sym) {
    return sym.split('').some((s)=> s.value == '@');
}
function samevalue (pas){
    return pas.split('').some((p)=>p.value)
}



function handlEvent(event){
    event.preventDefault();
    let username = event.target.elements.username;
    let email = event.target.elements.email;
    let name = event.target.elements.name;
    let numb = event.target.elements.phone;
    let pass = event.target.elements.password;
    let conpass = event.target.elements.conpass;

    console.log(event.target)

    if(username.value === ""){
        usererror = "Can't be empty";
    }
    else if(username.value.length < 4){
        usererror = "can't be less than 5 characters"
    }else {
        usererror = "";
    }
    username.nextElementSibling.innerHTML = usererror;

    if(email.value === ""){
        emailerror = "Can't be empty";
    }
    else if(email.value.length < 6){
        emailerror = "can't be less than 7 characters"
    }
    else if(!containsymbol(email.value)){
        emailerror = "Wrong Email"
    }else {
        emailerror = "";
    }
    email.nextElementSibling.innerHTML = emailerror;

    if(containnumber(name.value)){
        namerror = "You can't use number in the name field";
    }else{
        namerror ="";
    }
    name.nextElementSibling.innerHTML = namerror;


    if(numb.value === ""){
        numerror = "Can't be empty";
    }
    else if(numb.value.length < 8){
        numerror = "can't be less than 9 characters"
    }else {
        numerror = "";
    }
    numb.nextElementSibling.innerHTML = numerror;

    if(pass.value === "" || conpass.value === ""){
        passerror = "Can't be empty";
    }else if(samevalue(pass.value) != samevalue(conpass.value)){
        passerror = "Wrong Password";
    }else {
        passerror = "";
    }
    pass.nextElementSibling.innerHTML = passerror;

}

form.addEventListener('submit',handlEvent)