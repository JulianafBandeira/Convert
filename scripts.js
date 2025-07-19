const USD = 5.58
const EUR = 6.49
const GBP = 7.48

const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");


amount.addEventListener("input", () => {
  
  const hasCharacters = /\D+/g;
  amount.value = amount.value.replace(hasCharacters, "");
});


form.onsubmit = (e) => {
  e.preventDefault();

  switch(currency.value){
    case "USD":
        convertCurrency(amount.value, USD, "US$")
        break
    case "EUR":
        convertCurrency(amount.value, EUR, "€")
        break    
    case "GBP":
        convertCurrency(amount.value, GBP, "£")
        break    
    }
};

function convertCurrency(amount, price, symbol){
    console.log(amount, price, symbol)
}