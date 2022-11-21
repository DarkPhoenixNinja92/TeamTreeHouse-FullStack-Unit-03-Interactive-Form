const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const jobRole = document.querySelector('select[name="user-title"]')
const otherRole = document.querySelector('input[name="other-job-role"]');
const shirtDesign = document.getElementById('design');
const shirtColor = document.getElementById('color');
const colorOptions = document.querySelectorAll('#color option');
const checkboxes = document.querySelectorAll("input[type='checkbox']");
const activities = document.querySelector(".activities");
const cardNum = document.getElementById('cc-num');
const zipCode = document.getElementById('zip');
const cvv = document.getElementById('cvv');
const form = document.querySelector('form');
let totalCost = 0;

nameInput.focus();
otherRole.style.opacity = '0';

jobRole.addEventListener('change', (e) => {
    if(e.target.value == 'other') {
        otherRole.style.opacity = '100';
    } else if(e.target.value != 'other') {
        otherRole.style.opacity = '0';
    }
});

shirtColor.disabled = true;

shirtDesign.addEventListener('change', (event) => {
    shirtColor.disabled = false;
    const selectDesign = event.target.value;
    if(selectDesign == 'js puns') {
        colorOptions[1].selected = true;
    } else if(selectDesign == 'heart js') {
        colorOptions[4].selected = true;
    }

    for(let i = 1; i < colorOptions.length; i++) {
        const theme = colorOptions[i].getAttribute('data-theme');
        if(selectDesign === theme) {
            colorOptions[i].hidden = false;
        } else {
            colorOptions[i].hidden = true;
        }
    }
});

activities.addEventListener('change', (e) => {
    const selected = e.target;
    const clickedCost = selected.getAttribute('data-cost');
    const valClick = parseInt(clickedCost);
    const totalVal = document.querySelector(".activities-cost");
    const clickedDayAndTime = selected.getAttribute("data-day-and-time");

    if(selected.checked){
        totalCost += valClick;      
      }else{
       totalCost -= valClick;
    };  

totalVal.innerHTML = `Total: $${totalCost}`;
});

const selectPayment = document.querySelector(".payment-methods");
const paymentSelect = document.getElementById('payment');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');

paymentSelect.selected = true;
paypal.hidden = true;
bitcoin.hidden = true;

selectPayment.addEventListener('change',(e) => {
    const card = document.getElementById('credit-card');
    const payment = e.target.value;
    if(payment === 'paypal') {
        paypal.hidden = false;
        card.hidden = true;
        bitcoin.hidden = true;
    } else if(payment === 'bitcoin') {
        bitcoin.hidden = false;
        paypal.hidden = true;
        card.hidden = true;
    } else {
        card.hidden = false;
        paypal.hidden = true;
        bitcoin.hidden = true;
    }
});

function nameValidityCheck() {
    const nameVal = nameInput.value;
    const nameTest = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameVal);
    if(nameTest) {
        isValid(nameInput);
    } else {
        notValid(nameInput);
    }
    return nameTest;
}

function emailValidityCheck() {
    
}

function cardNumValidityCheck() {
    
}

function zipCodeValidityCheck() {
    
}

function cvvNumValidityCheck() {
    
}

function isValid(e) {
    e.parentElement.classList.add('valid');
    e.parentElement.classList.remove('not-valid');
    e.parentElement.lastElementChild.style.display = 'none';

}

function notValid(e) {
    e.parentElement.classList.add('not-valid');
    e.parentElement.classList.remove('valid');
    e.parentElement.lastElementChild.style.display = 'block';

}

form.addEventListener('submit', (event) => {
    event.preventDefault();
});