function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();

    switch(userInput) {
        case 'bear':
          return userInput
        case 'human':
          return userInput
        case 'gun':
          return userInput
        default:
        console.log('Please enter valid option');
        // alert('Please enter valid option');
    }
}

function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3);

    switch(randomNumber) {
          case 0:
            return 'Bear'
          case 1:
            return 'Human'
          case 2:
            return 'Gun'
          default:
              console.log('We have a problem');
      }
  }

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'The game was a tie';
    } else {
        if (userChoice === 'human') {
            if (computerChoice === 'bear') {
                return 'You have been mauled by a bear';
            } else {
                return 'You have disarmed a gun';
            }
        }
        if (userChoice === 'bear') {
            if (computerChoice === 'gun') {
                return 'You have been shot by a gun';
            } else {
                return 'You have mauled a human';
            }
        }
        if (userChoice === 'gun') {
            if (computerChoice === 'human') {
                return 'Your gun has been disarmed';
            } else {
                return 'You have shot a bear';
            }
        }
    }
}

function playGame() {
    var promptUsesChoice = prompt("Please choose bear, human or gun");
    var userChoice = getUserChoice(promptUsesChoice);
    var computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();
