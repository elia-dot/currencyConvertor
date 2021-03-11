const to = document.getElementById('to');
let options = ''

async function getList(){
    const listPromise = await fetch('/Common-Currency.json');
    const list = await listPromise.json();
    Object.keys(list).forEach(currencyCode => {
        options = 
        `<option value = "${currencyCode}">${list[currencyCode].code}`;
        to.innerHTML += options;
    })
}

getList();

const amountInput = document.getElementById('amountInput');
const convertTo = document.getElementById('to');
const submitBtn = document.getElementById('button');
const result = document.querySelector('.result');

submitBtn.addEventListener('click', () => {
    let amountToConvert = amountInput.value; 
    let target = convertTo.value;
    async function getRate(){
        const ratesPromise = await fetch(`https://v6.exchangerate-api.com/v6/12472f45360f69373043db36/pair/ILS/${target}`);
        const rates = await ratesPromise.json(); 
        result.innerHTML = `${amountToConvert*rates.conversion_rate} ${target}`
    }   
    getRate()
})

