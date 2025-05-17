function play(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById('user-choice').textContent = `You chose: ${userChoice}`;
  document.getElementById('computer-choice').textContent = `Computer chose: ${computerChoice}`;

  let result = '';
  let icon = '';

  if (userChoice === computerChoice) {
    result = "It's a Draw!";
    icon = '🤝';
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'scissors' && computerChoice === 'paper') ||
    (userChoice === 'paper' && computerChoice === 'rock')
  ) {
    result = "You Win!";
    icon = '🎉';
  } else {
    result = "You Lose!";
    icon = '😞';
  }

  showPopup(result, icon);
}

function showPopup(message, icon) {
  document.getElementById('popup').classList.remove('hidden');
  document.getElementById('popup-message').textContent = message;
  document.getElementById('popup-icon').textContent = icon;
}

function closePopup() {
  document.getElementById('popup').classList.add('hidden');
}
