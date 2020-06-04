const currencyElement1 = document.getElementById('currency-one');
const amountElement1 = document.getElementById('amount-one');
const currencyElement2 = document.getElementById('currency-two');
const amountElement2 = document.getElementById('amount-two');
const rateElement = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rates and update DOM
function calculate() {
  const currency_one = currencyElement1.value;
  const currency_two = currencyElement2.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
      const rate = data.rates[currency_two];
      rateElement.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
      amountElement2.value = (amountElement1.value * rate).toFixed(2);
    });
}

// Event Listeners
currencyElement1.addEventListener('change', calculate);
amountElement1.addEventListener('input', calculate);
currencyElement2.addEventListener('change', calculate);
amountElement2.addEventListener('input', calculate);
swap.addEventListener('click', () => {
  const temp = currencyElement1.value;
  currencyElement1.value = currencyElement2.value;
  currencyElement2.value = temp;
  calculate();
})

calculate();