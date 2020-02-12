// VARIABLES

const cardHolder = document.querySelector('#name-space');
const cardHolderInput = document.querySelector('#name');
const cardHolderBox = document.querySelector('#card-holder');
const cardNumber = document.querySelector('#number');
const cardNumberInput = document.querySelector('#card-number');
const expirationDate = document.querySelector('#expiration-date');
const monthInput = document.querySelector('#month');
const month = document.querySelector('#month-box');
const yearInput = document.querySelector('#year');
const year = document.querySelector('#year-box');
const submit = document.querySelector('#submit');

// variables: card numbers
const number1 = document.querySelector('#number1');
const number2 = document.querySelector('#number2');
const number3 = document.querySelector('#number3');
const number4 = document.querySelector('#number4');
const number5 = document.querySelector('#number5');
const number6 = document.querySelector('#number6');
const number7 = document.querySelector('#number7');
const number8 = document.querySelector('#number8');
const number9 = document.querySelector('#number9');
const number10 = document.querySelector('#number10');
const number11 = document.querySelector('#number11');
const number12 = document.querySelector('#number12');
const number13 = document.querySelector('#number13');
const number14 = document.querySelector('#number14');
const number15 = document.querySelector('#number15');
const number16 = document.querySelector('#number16');

// different banks stickers
const company = document.querySelector('#company');
const americanExpress = '<i class="fab fa-cc-amex bank"></i>';
const visa = '<i class="fab fa-cc-visa bank"></i>';
const masterCard = '<i class="fab fa-cc-mastercard bank"></i>'

// FUNCTIONS

// number formats in the card
const amExFormat = () => {
    number16.remove();
    [number8, number12].map(el => el.classList.remove('space-right'));
    number10.classList.add('space-right');
};

const normalFormat = () => {
    cardNumber.appendChild(number16);
    [number8, number12].map(el => el.classList.add('space-right'));
    number10.classList.remove('space-right');
};

// indicate which option of the card you are editing
const selectPlaceholder = (event) => {
    if (event.target === cardNumberInput) {
        cardNumber.classList.add('selected');
        cardHolderBox.classList.remove('selected');
        expirationDate.classList.remove('selected');
    } else if (event.target === cardHolderInput) {
        cardHolderBox.classList.add('selected');
        expirationDate.classList.remove('selected');
        cardNumber.classList.remove('selected');
    } else if (event.target === monthInput || event.target === yearInput) {
        expirationDate.classList.add('selected');
        cardHolderBox.classList.remove('selected');
        cardNumber.classList.remove('selected');
    }
};

// insert the name in the card
const insertName = () => {
    cardHolder.innerText = (cardHolderInput.value).toLocaleUpperCase();
};

// type the number of the card
const insertNumber = (e) => {
    if (e.target.value.charAt(0) === '3' && e.target.value.charAt(1) === '4') {
        amExFormat();
        company.innerHTML = americanExpress;
    } else if (e.target.value.charAt(0) === '4') {
        normalFormat();
        company.innerHTML = visa;
    } else if (e.target.value.charAt(0) === '5' && e.target.value.charAt(1) === '1') {
        normalFormat();
        company.innerHTML = masterCard;
    } else {
        company.innerHTML = '';
    } 
};

// type expirations date
const insertDate = (event) => {
    event.target.addEventListener('mousedown', function(e){
        event.target.value = '';
    });
    if (event.target === monthInput) {
        month.innerText = monthInput.value;
        // monthInput.value = '';
    } else if (event.target === yearInput) {
        year.innerText = (yearInput.value).substring(2);
        // yearInput.value = '';
    }
};

// Event Listener
window.addEventListener('click', function(e){
    if (e.target === document.querySelector('.card').parentElement) {
        cardNumber.classList.remove('selected');
        cardHolderBox.classList.remove('selected');
        expirationDate.classList.remove('selected');
    }
});
cardHolderInput.addEventListener('keyup', insertName);
cardHolderInput.addEventListener('click', selectPlaceholder);
cardNumberInput.addEventListener('keyup', insertNumber);
cardNumberInput.addEventListener('click', selectPlaceholder);
monthInput.addEventListener('click', selectPlaceholder);
monthInput.addEventListener('keyup', insertDate);
yearInput.addEventListener('click', selectPlaceholder);
yearInput.addEventListener('keyup', insertDate);
submit.addEventListener('click', function (e) {
    e.preventDefault();
});



/** 
IDEAS FOR THE FUTURE

- add an option to change the background of the credit card
*/ 

