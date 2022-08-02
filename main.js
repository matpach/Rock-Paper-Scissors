const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const counterDisplay = document.getElementById('counter')
// possible choices
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result
let counter = 0;

possibleChoices.forEach(possibleChoice => {
    possibleChoice.addEventListener('click', (e) => {
        userChoice = e.target.id
        userChoiceDisplay.innerHTML = userChoice
        generateComputerChoice()
        gerResult()
    })
})

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    console.log(randomNumber)

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function gerResult() {
    if (computerChoice === userChoice) {
        result = 'Its draw'
    }
    // user winning
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'you win'
        counter ++
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'you win'
        counter ++
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'you win'
        counter ++
    }
    // computer win
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'computer win'
        counter --
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'computer win'
        counter --
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'computer win'
        counter --
    }
    resultDisplay.innerHTML = result
    counterDisplay.innerHTML = counter
}