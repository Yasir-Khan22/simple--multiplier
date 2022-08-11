const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const heading1 = document.getElementById("question");
heading1.innerText = `Multiply ${num1} by ${num2}`;

const input__Element = document.getElementById("input");
const form__element = document.getElementById("form");
const Answers = num1 * num2;
console.log(Answers)


// form__element.addEventListener("submit", () => {
//     if (Answers == +input__Element.value) {
//         score++;
//         console.log("submit clicked!")
//         console.log(input__Element)
//     } else {
//         score--
//     }
// })