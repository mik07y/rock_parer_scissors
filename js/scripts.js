function computerPlay() {
    let randNum
    let computerSelection
    randNum = Math.floor(
        Math.random() * (3 - 1 + 1) + 1)
    switch (randNum) {
        case 1:
            computerSelection = 'Rock'
            break
        case 2:
            computerSelection = 'Paper'
            break
        case 3:
            computerSelection = 'Scissors'
            break
    }
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    let actualChoice
    let result
    actualChoice = playerSelection.toLowerCase()
    actualChoice = actualChoice.charAt(0).toUpperCase() + actualChoice.slice(1);
    switch (actualChoice) {
        case 'Paper':
            if (computerSelection == 'Paper') result = 'Draw'
            if (computerSelection == 'Rock') result = 'Win'
            if (computerSelection == 'Scissors') result = 'Lose'
            break
        case 'Rock':
            if (computerSelection == 'Paper') result = 'Lose'
            if (computerSelection == 'Rock') result = 'Draw'
            if (computerSelection == 'Scissors') result = 'Win'
            break
        case 'Scissors':
            if (computerSelection == 'Paper') result = 'Win'
            if (computerSelection == 'Rock') result = 'Lose'
            if (computerSelection == 'Scissors') result = 'Draw'
            break
        default:
            result = 'Invalid Player Choice'
    }
    return result
}

function getTheWinner(playerScore, botScore) {

    if (playerScore > botScore) {
        winner = 'Player'
    } else if (playerScore < botScore) {
        winner = 'Bot'
    }
    else {
        winner = 'Draw'
    }
    return winner
}

function game() {
    let roundCounter = 0
    let playerScore = 0
    let botScore = 0
    let result
    let winner
    let playerSelection
    let computerSelection
    let playerName

    playerName = prompt('Enter you name')

    for (roundCounter = 0; roundCounter < 5; roundCounter++) {

        playerSelection = prompt('Rock, paper or scissors ?')
        computerSelection = computerPlay()
        result = playRound(playerSelection, computerSelection)
        if (result != null) {
            switch (result) {
                case 'Win':
                    ++playerScore
                    console.log('Win')
                    break
                case 'Lose':
                    ++botScore
                    console.log('Lose')
                    break
                case 'Draw':
                    console.log('Draw')
                    break
                case 'Invalid Player Choice':
                    console.log('Invalid player choice')
                    break
            }

        }
        else {
            console.log('Error, something unusual happened')
        }

    }

    winner = getTheWinner(playerScore, botScore)

    if (winner != 'Draw') {
        console.log('The winner is ' + winner)
        console.log(playerName+"'s score is: " + playerScore)
        console.log('Bot score is: ' + botScore)
    } else {
        console.log("It's a draw")
    }
}

game()