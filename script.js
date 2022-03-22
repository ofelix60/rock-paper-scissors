const btns = document.querySelectorAll('button');
const playerOneIcon = document.getElementById('player-one');
const playerTwoIcon = document.getElementById('player-two');
const winner = document.getElementById('winner');
const icons = ['🪨', '📰', '✂️'];

let playerScoreDisplay = document.getElementById('score-one');
let cpuScoreDisplay = document.getElementById('score-two');
let playerChoice = '';
let cpuChoice = '';
let playerScore = '';
let cpuScore = '';

function init() {
	winner.innerText = '';
	playerScoreDisplay.innerText = '0';
	cpuScoreDisplay.innerText = '0';
	playerOneIcon.innerText = '';
	playerTwoIcon.innerText = '';
	playerScore = 0;
	cpuScore = 0;
}

function cpuMove() {
	const move = Math.floor(Math.random() * (2 - 0 + 1) + 0);
	playerTwoIcon.innerText = icons[move];
	cpuChoice = move;
}

function playerMove(number) {
	playerOneIcon.innerText = icons[number];
	playerChoice = number;
	cpuMove();
	roundWinner();
}

function roundWinner() {
	// DRAW
	if (playerChoice == cpuChoice) {
		winner.innerHTML = `<h2><span><--</span> DRAW <span>--></span></h2>`;
	}
	// ROCK
	if (playerChoice === 0 && cpuChoice === 2) {
		winner.innerHTML = `<h2><span><--</span> PLAYER 1 WINS </h2>`;
		playerScore++;
		playerScoreDisplay.innerText = playerScore;
	} else if (playerChoice === 0 && cpuChoice === 1) {
		winner.innerHTML = `<h2> CPU WINS <span>--></span></h2>`;
		cpuScore++;
		cpuScoreDisplay.innerText = cpuScore;
	}
	// PAPER
	if (playerChoice === 1 && cpuChoice === 0) {
		winner.innerHTML = `<h2><span><--</span> PLAYER 1 WINS </h2>`;
		playerScore++;
		playerScoreDisplay.innerText = playerScore;
	} else if (playerChoice === 1 && cpuChoice === 2) {
		winner.innerHTML = `<h2> CPU WINS <span>--></span></h2>`;
		cpuScore++;
		cpuScoreDisplay.innerText = cpuScore;
	}
	// SCISSORS
	if (playerChoice === 2 && cpuChoice === 1) {
		winner.innerHTML = `<h2><span><--</span> PLAYER 1 WINS </h2>`;
		playerScore++;
		playerScoreDisplay.innerText = playerScore;
	} else if (playerChoice === 2 && cpuChoice === 0) {
		winner.innerHTML = `<h2> CPU WINS <span>--></span></h2>`;
		cpuScore++;
		cpuScoreDisplay.innerText = cpuScore;
	}
}

for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener('click', function (e) {
		e.preventDefault();
		playerMove(i);
	});
}

init();
