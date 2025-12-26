function play(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById('user-choice').innerText = "Your choice: " + userChoice;
    document.getElementById('computer-choice').innerText = "Computer choice: " + computerChoice;

    let winner = '';

    if(userChoice === computerChoice){
        winner = "It's a Tie!";
    }
    else if(
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ){
        winner = "You Win!";
    } else {
        winner = "Computer Wins!";
    }

    document.getElementById('winner').innerText = "Winner: " + winner;
}
