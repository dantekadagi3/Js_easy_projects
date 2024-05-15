'use strict';
let num = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if (!guess) {
        document.querySelector('.message').textContent = 'Please enter a number ‼';
    }
    // when player wins
    else if (guess === num) {
        document.querySelector('.number').textContent = num;
        document.querySelector('.message').textContent = '🥳 correct number';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    // when guess is wrong
    else if (guess !== num) {
        if (score > 1) {
            document.querySelector('.message').textContent = guess > num ? 'Too high' : 'Too Low';
            score -= 1;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You Lost the game 😥';
            document.querySelector('.score').textContent = 0;
        }
    }
});

// Again Button
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    num = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing....';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.score').textContent = score;
});
