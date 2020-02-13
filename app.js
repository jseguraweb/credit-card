// VARIABLES
const card = document.querySelector('.card')
const cardHolder = document.querySelector('#name-space');
const cardHolderInput = document.querySelector('#name');
const cardHolderBox = document.querySelector('#card-holder');
const arrayCardNumbers = [...document.querySelectorAll('.number')];
const cardNumber = document.querySelector('#numbers');
const cardNumberInput = document.querySelector('#card-number');
const expirationDate = document.querySelector('#expiration-date');
const monthInput = document.querySelector('#month');
const month = document.querySelector('#month-box');
const yearInput = document.querySelector('#year');
const year = document.querySelector('#year-box');
const cvvNumber = document.querySelector('#cvv-number');
const submit = document.querySelector('#submit');

// variables: card numbers
const number4 = document.querySelector('#number4');
const number8 = document.querySelector('#number8');
const number10 = document.querySelector('#number10');
const number12 = document.querySelector('#number12');

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
    cardNumberInput.setAttribute('maxlength', '15');
};

const normalFormat = () => {
    cardNumber.appendChild(number16);
    [number8, number12].map(el => el.classList.add('space-right'));
    number10.classList.remove('space-right');
    cardNumberInput.setAttribute('maxlength', '16');
};

// select which bank your card belongs
const selectBank = (e) => {
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
        normalFormat();
        company.innerHTML = '';
    } 
};

// indicate which option of the card you are editing
const selectPlaceholder = (event) => {
    if (event.target === cardNumberInput) {
        cardNumber.classList.add('selected');
        cardHolderBox.classList.remove('selected');
        expirationDate.classList.remove('selected');
        card.classList.remove('rotate');
        frontsideCard();
    } else if (event.target === cardHolderInput) {
        cardHolderBox.classList.add('selected');
        expirationDate.classList.remove('selected');
        cardNumber.classList.remove('selected');
        card.classList.remove('rotate');
        frontsideCard();
    } else if (event.target === monthInput || event.target === yearInput) {
        expirationDate.classList.add('selected');
        cardHolderBox.classList.remove('selected');
        cardNumber.classList.remove('selected');
        card.classList.remove('rotate');
        frontsideCard();
    }
};

// insert the name in the card
const insertName = () => {
    cardHolder.innerText = (cardHolderInput.value).toLocaleUpperCase();
};

// type the number of the card
const insertNumber = (e) => {
    e.target.addEventListener('keyup', selectBank);
    let numbers = '';
    numbers += cardNumberInput.value;
    numbers = numbers.split('');

    for(let i = 0; i < arrayCardNumbers.length; i++){
        if(numbers[i]) {
            arrayCardNumbers[i].innerText = cardNumberInput.value.charAt(i);
        } 
        else {
            arrayCardNumbers[i].innerText = '#';
        }
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

// frontside card
const frontsideCard = () => {
    card.classList.add('frontside');
    card.classList.remove('backside');
    document.querySelector('#certificate').style.display = 'block';
    document.querySelector('#numbers').style.display = 'flex';
    document.querySelector('#card-holder').style.display = 'block';
    document.querySelector('#expiration-date').style.display = 'block';
};

// rotate to frontside
const rotateToFrontside = () => {

};

// backside card
const backsideCard = () => {
    card.classList.add('backside');
    card.classList.remove('frontside');
    document.querySelector('#certificate').style.display = 'none';
    document.querySelector('#numbers').style.display = 'none';
    document.querySelector('#card-holder').style.display = 'none';
    document.querySelector('#expiration-date').style.display = 'none';
    cvvNumber.removeEventListener('click', rotateToBackside);
    cardHolderInput.addEventListener('click', rotateToFrontside);
    cardNumberInput.addEventListener('click', rotateToFrontside);
    monthInput.addEventListener('click', rotateToFrontside);
    yearInput.addEventListener('click', rotateToFrontside);
};

// rotate to backside
const rotateToBackside = () => {
    card.classList.add('rotate');
    backsideCard();
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
cvvNumber.addEventListener('click', rotateToBackside);
submit.addEventListener('click', function (e) {
    e.preventDefault();
});



/** 
IDEAS FOR THE FUTURE

- add an option to change the background of the credit card
*/ 
