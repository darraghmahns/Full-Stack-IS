let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.ceil(Math.random() * 9);
}

const compareGuesses = (userGuess, compGuess, target) => {
    let userDistance = Math.abs(target - userGuess);
    let compDistance = Math.abs(target - compGuess);

    if(userDistance === compDistance) {
        return true;
    } else if(userDistance < compDistance) {
        return true;
    } else {
        return false;
    }
}

const updateScore = winner => {
    
    switch(winner) {

        case 'human': 
            humanScore++;
        break;

        case 'computer':
            computerScore++;
        break;
    }
}

const advanceRound = () => {
    currentRoundNumber++;
}
