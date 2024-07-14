document.addEventListener('DOMContentLoaded', function () {
    const choices = document.querySelectorAll('.choice');
    const resultDiv = document.getElementById('result');
    const resetButton = document.getElementById('reset-button');
    const choicesArray = ['rock', 'paper', 'scissors'];
    let userChoice = '';
    let computerChoice = '';

    choices.forEach(choice => {
        choice.addEventListener('click', function() {
            userChoice = this.id;
            computerChoice = choicesArray[Math.floor(Math.random() * choicesArray.length)];
            displayResult();
        });
    });

    resetButton.addEventListener('click', resetGame);

    function displayResult() {
        if (userChoice === computerChoice) {
            resultDiv.textContent = `It's a tie! You both chose ${userChoice}.`;
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            resultDiv.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
        } else {
            resultDiv.textContent = `You lose! ${computerChoice} beats ${userChoice}.`;
        }
    }

    function resetGame() {
        resultDiv.textContent = '';
        userChoice = '';
        computerChoice = '';
    }
});
