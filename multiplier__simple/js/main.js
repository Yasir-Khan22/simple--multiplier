const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const formElem = document.getElementById("form");
const inputElem = document.getElementById("input");
const heading1 = document.getElementById("question");

let score = JSON.parse(localStorage.getItem("score"));

heading1.innerText = `Multiply ${num1} by ${num2}?`;

const Answers = num1 * num2;

formElem.addEventListener("submit", () => {
    const UserAns = +inputElem.value;

    if (Answers === UserAns) {
        score++;
        console.log(score)
        updateLocalStorage()
    }
    else {
        score--
        console.log(score)
        updateLocalStorage()

    }
});


function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score))
}