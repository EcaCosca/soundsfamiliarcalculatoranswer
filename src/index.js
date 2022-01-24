/**
 * Create the class Calculator
 * this class has 3 methods:
 * - history: once the = key is pressed, it keeps the last value in
 *            memory in an array
 * - equals: returns the value (thanks to an 'eval' function)
 * - clear: clears the history
 */

class Calculator{
    constructor(){
        this._history = []
    }

    history(num){
        this._history.push(num)
        console.log(this._history)
    }
    equals(){
        const operation = calculatorScreen.innerHTML
        const result = eval(operation);
        console.log(result)
        this.history(result)
        calculatorScreen.innerHTML = result;
    }
    clear(){
        calculatorScreen.innerHTML = ""
        this._history = [];
        console.log(this._history)
    }
}
const calculatorScreen = document.querySelector("#calculator .screen");
const equals = document.querySelector("#calculator .eval");

/**
 * This function below write the value of the pressed key on the screen
 * The += is the equivalent of:
 * document.querySelector('.screen').innerHTML = document.querySelector('.screen').innerHTML + val;
 *
 **/
function print(val) {
  calculatorScreen.innerHTML += val;
}

//this code listen to every key on the calculator and add the value on the screen
document.querySelectorAll("#calculator span").forEach((key) => {
  if (key.innerText !== "=") {
    key.addEventListener("click", (e) => print(e.target.innerText));
  }
});

document
  .querySelector("#calculator .clear")
  .addEventListener("click", () => calc.clear());

// Implement here the event when the = key is pressed

const calc = new Calculator

equals.addEventListener('click', 
    () =>  calc.equals()
)
