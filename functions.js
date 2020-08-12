function multiply(Number1, Number2, Number3) {
  return Number1 * Number2 * Number3 
}
const first = prompt("Name a number");
const second = prompt("Name another number");
const third = prompt("And one final number");

const firstNum = parseInt(first)
const secondNum = parseInt(second)
const thirdNum = parseInt(third)

const total = multiply(firstNum, secondNum, thirdNum);

alert("Your numbers multiplied together equal " + total)