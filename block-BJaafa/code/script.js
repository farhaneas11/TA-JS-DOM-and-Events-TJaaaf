function main(){

let input = document.querySelector('#valueno');
let button =document.querySelector('button');
 
let toresult = document.querySelector('.result');
var baseCurrencyInput = document.getElementById('currency-1');
var secondCurrencyInput = document.getElementById('currency-2');


let initialvalue = Number(localStorage.getItem('value')) || 0;

var crrncy = {
    'EUR': {'PLN': 4.15, 'USD': 0.83}, 
    'USD': {'PLN': 3.45, 'EUR': 1.2}
}
function convertCurrency(event) {
    event.preventDefault();
    var amount = input.value;
    var from = baseCurrencyInput.value;
    var to = secondCurrencyInput.value;
    var result = 0;
    
    try{
      if (from == to){
        result = amount;
      } else {
       result = amount * crrncy[from][to];
    }
    }
    catch(err) {
      result = amount * (1 / crrncy[to][from]);
    }
    toresult.textContent = result;  
}
button.addEventListener("click",convertCurrency);
}
main();