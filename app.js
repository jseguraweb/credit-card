// Variables
const cardHolder = document.querySelector('#name-space');
const cardHolderInput = document.querySelector('#name');
const cardHolderBox = document.querySelector('#card-holder');
const cardNumber = document.querySelector('#number');
const cardNumberInput = document.querySelector('#card-number');
const numbersFirstBox = document.querySelector('#box-one-numbers');
const numbersSecondBox = document.querySelector('#box-two-numbers');
const numbersThirdBox = document.querySelector('#box-three-numbers');
const numbersFourthBox = document.querySelector('#box-four-numbers');
const expirationDate = document.querySelector('#expiration-date');
const monthInput = document.querySelector('#month');
const month = document.querySelector('#month-box');
const yearInput = document.querySelector('#year');
const year = document.querySelector('#year-box');
const submit = document.querySelector('#submit');

// Functions
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

const insertName = () => {
    cardHolder.innerText = (cardHolderInput.value).toLocaleUpperCase();
};

const insertNumber = () => {
    // regex max 16 nrs
};

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