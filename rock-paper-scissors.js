const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error!')
  } 
  }
  //console.log(getUserChoice('paper'));
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random()* 3)
    switch (randomNumber){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'The game is a tie';
    }
    if ( userChoice === 'rock') {
      if ( computerChoice === 'paper') {
      return 'The Computer Won !!!';
    } else {
      return 'You Won !!!';
      }
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'The Computer Won !!!';
      } else {
      return 'You Win !!!';
      }
    }
     if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The Computer Won !!!';
      } else {
      return 'You Win !!!';
      }
    }
    if (userChoice === 'bomb') {
      return 'You won !!!';
    }
  };
  
  const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw:' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();
