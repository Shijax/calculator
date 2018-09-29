import {addNumber} from '../components/calculator.js'

const oneButton = document.getElementById('oneButton');
const twoButton = document.getElementById('twoButton');
const threeButton = document.getElementById('threeButton');
const fourButton = document.getElementById('fourButton');
const fiveButton = document.getElementById('fiveButton');
const sixButton = document.getElementById('sixButton');
const sevenButton = document.getElementById('sevenButton');
const eightButton = document.getElementById('eightButton');
const nineButton = document.getElementById('nineButton');
const addButton = document.getElementById('addButton');
const subtractButton = document.getElementById('subtractButton');
const multiplyButton = document.getElementById('multiplyButton');
const divideButton = document.getElementById('divideButton');
const equalsButton = document.getElementById('equalsButton');

const addNumbberCaller = (e) => {
    addNumber(e.target.innerHTML);
}

const equalButtonEvent = (e) => {
    
}

const oneButtonEvent = () => {
    oneButton.addEventListener('click', addNumbberCaller);
};

const twoButtonEvent = () => {
    twoButton.addEventListener('click', addNumbberCaller);
};

const threeButtonEvent = () => {
    threeButton.addEventListener('click', addNumbberCaller);
};

const fourButtonEvent = () => {
    fourButton.addEventListener('click', addNumbberCaller);
};

const fiveButtonEvent = () => {
    fiveButton.addEventListener('click', addNumbberCaller);
};

const sixButtonEvent = () => {
    sixButton.addEventListener('click', addNumbberCaller);
};

const sevenButtonEvent = () => {
    sevenButton.addEventListener('click', addNumbberCaller);
};

const eightButtonEvent = () => {
    eightButton.addEventListener('click', addNumbberCaller);
};

const divideButtonEvent = () => {
    divideButton.addEventListener('click',() => {
        setMathType('divide');
};


const attachEvents = () => {
    oneButtonEvent();
    twoButtonEvent();
    threeButtonEvent();
    fourButtonEvent();
    fiveButtonEvent();
    sixButtonEvent();
    sevenButtonEvent();
    eightButtonEvent();
}

export default attachEvents