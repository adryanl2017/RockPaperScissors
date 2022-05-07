const choiceLabelMap = {
  r: 'Rock',
  s: 'Scissors',
  p: 'Paper',
};

const choiceArray = ['r', 'p', 's'];

function getIsPlayerReady() {
  return confirm('Ready to play some Rock, Paper, Scissors? :)');
}

function getUserChoice() {
  const userChoice = prompt('Choose Rock, Paper, or Scissors (only type r, p, or s)');
  if (!choiceArray.includes(userChoice)) {
    getUserChoice();
  } else {
    return userChoice;
  }
}

function getComputerChoice() {
  const computerChoiceIndex = Math.floor(Math.random() * 3);
  return choiceArray[computerChoiceIndex];
}

function getResult(userChoice, computerChoice) {
  let result;
  if (computerChoice === userChoice) {
    result = 'TIE!';
  } else if (
    (computerChoice === 'r' && userChoice === 's') ||
    (computerChoice === 'p' && userChoice === 'r') ||
    (computerChoice === 's' && userChoice === 'p')
  ) {
    result = 'LOSE!';
  } else {
    result = 'WIN!';
  }

  return result;
}

function playGame() {
  if (getIsPlayerReady()) {
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();
    const result = getResult(userChoice, computerChoice);
    alert(result + ' Opponent chose ' + choiceLabelMap[computerChoice] + '!');
    playGame();
  }
}

playGame();
