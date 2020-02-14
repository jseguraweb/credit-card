// VARIABLES
const cardContent = document.querySelector('.card-inner')
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
const arrayCVV = [...document.querySelectorAll('.cvv-num')];
const CVVcontainer = document.querySelector('#card-cvv-number');
const cvvNumber = document.querySelector('#placeholder-cvv');
const cvvNumberFour = document.createElement('span');
cvvNumberFour.classList.add('cvv-num');
cvvNumberFour.appendChild(document.createTextNode('#'));
const cvvNumberInput = document.querySelector('#cvv-number');
const submit = document.querySelector('#submit');

// variables: card numbers
const number4 = document.querySelector('#number4');
const number8 = document.querySelector('#number8');
const number10 = document.querySelector('#number10');
const number12 = document.querySelector('#number12');
const number16 = document.querySelector('#number16');

// different banks stickers
const company = [...document.querySelectorAll('.company')];
const americanExpress = '<i class="fab fa-cc-amex bank"></i>';
const visa = '<i class="fab fa-cc-visa bank"></i>';
const masterCard = '<i class="fab fa-cc-mastercard bank"></i>'

// FUNCTIONS

// rotate card
let rotated = false;

const rotateCard = () => {
    cardContent.style.transform = 'rotateY(180deg)';
    rotated = true;
};

// number formats in the card
const amExFormat = () => {
    number16.remove();
    [number8, number12].map(el => el.classList.remove('space-right'));
    number10.classList.add('space-right');
    cardNumberInput.setAttribute('maxlength', '15');
    arrayCVV.push(cvvNumberFour);
    CVVcontainer.appendChild(cvvNumberFour);
    cvvNumberInput.setAttribute('maxlength', '4');
};

const normalFormat = () => {
    cardNumber.appendChild(number16);
    [number8, number12].map(el => el.classList.add('space-right'));
    number10.classList.remove('space-right');
    cardNumberInput.setAttribute('maxlength', '16');
    cvvNumberFour.remove();
    cvvNumberInput.setAttribute('maxlength', '3');
};

// select which bank your card belongs
const selectBank = (e) => {
    if (e.target.value.charAt(0) === '3' && e.target.value.charAt(1) === '4') {
        amExFormat();
        company.map(el => el.innerHTML = americanExpress);
    } else if (e.target.value.charAt(0) === '4') {
        normalFormat();
        company.map(el => el.innerHTML = visa);
    } else if (e.target.value.charAt(0) === '5' && e.target.value.charAt(1) === '1') {
        normalFormat();
        company.map(el => el.innerHTML = masterCard);
    } else {
        normalFormat();
        company.map(el => el.innerHTML = '');
    } 
};

// indicate which option of the card you are editing
const selectPlaceholder = (event) => {
    if (event.target === cardNumberInput) {
        cardNumber.classList.add('selected');
        cardHolderBox.classList.remove('selected');
        expirationDate.classList.remove('selected');
        if (rotated) {
            cardContent.style.transform = 'rotateY(0deg)';
        } 
    } else if (event.target === cardHolderInput) {
        cardHolderBox.classList.add('selected');
        expirationDate.classList.remove('selected');
        cardNumber.classList.remove('selected');
        if (rotated) {
            cardContent.style.transform = 'rotateY(0deg)';
        } 
    } else if (event.target === monthInput || event.target === yearInput) {
        expirationDate.classList.add('selected');
        cardHolderBox.classList.remove('selected');
        cardNumber.classList.remove('selected');
        if (rotated) {
            cardContent.style.transform = 'rotateY(0deg)';
        } 
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
    } else if (event.target === yearInput) {
        year.innerText = (yearInput.value).substring(2);
    }
};

// insert CVV number
const insertCVV = () => {
    let cvv = '';
    cvv += cvvNumberInput.value;
    cvv = cvv.split('');
    console.log(arrayCVV);
    
    for(let i = 0; i < arrayCVV.length; i++){
        if(cvv[i]) {
            arrayCVV[i].innerText = cvvNumberInput.value.charAt(i);
        } 
        else {
            arrayCVV[i].innerText = '#';
        }
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
cvvNumberInput.addEventListener('click', rotateCard);
cvvNumberInput.addEventListener('keyup', insertCVV);
submit.addEventListener('click', function (e) {
    e.preventDefault();
});



/** 
IDEAS FOR THE FUTURE

- add an option to change the background of the credit card
*/ 
