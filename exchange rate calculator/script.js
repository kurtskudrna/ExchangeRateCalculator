const currencyOne = document.getElementById('currency-one');
const currencyTwo = document.getElementById('currency-two');
const amountOne = document.getElementById('amount-one');
const amountTwo = document.getElementById('amount-two');
const rateOutput = document.getElementById('rate');
const swap = document.getElementById('swap');




function calc() {
    const currencyOneValue = currencyOne.value;
    const currencyTwoValue = currencyTwo.value;


    fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOneValue}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.rates[currencyTwoValue];

            rateOutput.innerText = `1 ${currencyOneValue} = ${rate} ${currencyTwoValue}`;


            amountTwo.value = (amountOne.value * rate).toFixed(4)
        })
}
currencyOne.addEventListener('change', calc);
amountOne.addEventListener('input', calc);
currencyTwo.addEventListener('change', calc);
amountTwo.addEventListener('input', calc);

swap.addEventListener('click', () => {
    const val = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = val;
    calc();

})



calc();