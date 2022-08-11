const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const heading1 = document.getElementById("question");
const inputElem = document.getElementById("input");
const formElem = document.getElementById("form");

const Answers = num1 * num2;
console.log(Answers)


heading1.innerText = `Multiply ${num1} by ${num2}?`;


formElem.addEventListener("submit", () => {
    const UserAns = +inputElem.value;
    if (Answers == UserAns) {
        score++;
        console.log("submit clicked!")
        console.log(inputElem)
    } else {
        score--
    }
})