import { calculate, setDisplay, initialDisplay, setMathType, addNumber } from './components/calculator.js';
import buttonEvents from './helpers/buttonEvents.js';

// console.log(calculate(4,2, 'multiply')); //8

const initializeApp = () => {
    buttonEvents ();
    initialDisplay ();
};

initializeApp ();

