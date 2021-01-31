'use strict';
/*
console.log( document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'correct number! 🎉';

document.querySelector('.number').textContent =13;
document.querySelector('.score').textContent =10;

console.log( document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
*/
/*
document.querySelector('.check').addEventListener
('click',function(){
  const guess =Number( document.querySelector('.guess').value);

  if(!guess){
    document.querySelector('.message').textContent = 
    '📛 No number';
  }
  if ( guess<=20 && guess >0 && score > 0){ 
    if(guess<secretNumber){
      document.querySelector('.message').textContent = 'too low';
      score--;
      document.querySelector('.score').textContent = score;
    }else if(guess>secretNumber){
      document.querySelector('.message').textContent = 'too high';
      score--;
      document.querySelector('.score').textContent = score;
    }else{
      document.querySelector('.message').textContent = 'correct number! 🎉';
    }
  };
  if(score = 0 ){
    document.querySelestor('.message').textContent = 'game over';
  };
  if(guess>20 || guess < 0){
    document.querySelector('.message').textContent = 'number out of border';
  };
});
*/
let secretNumber =Math.trunc( Math.random()*10)+1;

let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click',function(){
  const guess = Number( document.querySelector('.guess').value);
  if(!guess){
    document.querySelector('.message').textContent = '⛔ no number ⛔ '
  };
  if(score === 0){
    document.querySelector('.message').textContent = 'game over';
  }else if(score === 1){
    if(guess === secretNumber){
      document.querySelector('.message').textContent = 'corect number🎉';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
    }else{
      document.querySelector('.message').textContent = 'game over';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }else if(score>1){
    if(guess>secretNumber){
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'too high';
    }else if(guess<secretNumber){
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'too low';
    }else{
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'corect number🎉';
      document.querySelector('.number').textContent = secretNumber;
      if(highScore<score){
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
      }
    }
  }
})
document.querySelector('.number').textContent = secretNumber;

// if (document.querySelector('.message').textContent === 'corect number🎉'){
  document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'stert guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    secretNumber =Math.trunc( Math.random()*10)+1;

})

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage('⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  //   // When guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/
