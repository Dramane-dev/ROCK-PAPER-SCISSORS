let possibilites = ['ROCK', 'PAPER', 'SCISSORS'];

let computerPlay = () => {
    return possibilites[Math.floor(Math.random() * possibilites.length)];
};

let playRound = (playerSelection, computerSelection) => {
    let winnerSentence = '';
    playerSelection = playerSelection.toString().toUpperCase();
    computerSelection = computerSelection.toString().toUpperCase();

    switch (true) {
        case playerSelection === computerSelection:
            winnerSentence = `Your selection is equals to computer.`;
            break;
        case playerSelection === possibilites[0]:
            winnerSentence = computerSelection === possibilites[1] ? `You loose ! ${computerSelection} beats ${playerSelection}` : `You win ! ${playerSelection} beats ${computerSelection}.`;
            break;
        case playerSelection === possibilites[1]:
            winnerSentence = computerSelection === possibilites[0] ? `You win ! ${playerSelection} beats ${computerSelection}` : `You loose ! ${computerSelection} beats ${playerSelection}.`;
            break;
        case playerSelection === possibilites[2]:
            winnerSentence = computerSelection === possibilites[0] ? `You loose ! ${computerSelection} beats ${playerSelection}` : `You win ! ${playerSelection} beats ${computerSelection}.`;
            break;
        default:
            console.log('Bad input !');
            game();
            break;
    }
    return winnerSentence;
};

let game = () => {
    let playerScore = [];
    let computerScore = [];

    for (let i = 0; i < 5; i++) {
        let result = playRound(prompt('Choose your sign (ROCK - PAPER - SCISSORS) :'), computerPlay());

        if (result.includes('You win')) {
            playerScore.push(1);
        } else {
            computerScore.push(1);
        }
    }
    return playerScore.length > computerScore.length ? `The winner is Player with ${playerScore.length} - ${computerScore.length} !` : 
        playerScore.length === computerScore.length ? `Nobody won ...` : 
        `The winner is Computer with ${computerScore.length} - ${playerScore.length} !`;
};

console.log(game());
