const choices = ['pierre', 'papier', 'ciseaux'];

function getComputerChoice() {
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 0;
  } else if (
    (playerSelection === 'pierre' && computerSelection === 'ciseaux') ||
    (playerSelection === 'papier' && computerSelection === 'pierre') ||
    (playerSelection === 'ciseaux' && computerSelection === 'papier')
  ) {
    return 1;
  } else {
    return -1;
  }
}

function playGame() {
  let counter = 0;

  for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice();
    let playerSelection = prompt(
      'Veuillez saisir une valeur entre pierre, papier ou ciseaux :'
    );

    if (playerSelection === null) return;
    playerSelection = playerSelection.toLowerCase();

    counter = counter + playRound(playerSelection, computerSelection);
  }

  if (counter === 0) {
    return 'Égalité';
  } else if (counter > 0) {
    return 'Vous avez gagné';
  } else {
    return 'Vous avez perdu';
  }
}

console.log(playGame());
