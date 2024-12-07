'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    if(!guess){
        document.querySelector('.message').textContent = '⛔no number ';
    }else if(guess === secretNumber){
        document.querySelector('.message').textContent = 
        '🎉Correct Number';
        document.querySelector('.number').textContent = 
        secretNumber;
        document.body.style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = 
            highScore;
        }
    }
    else if(guess > secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = 
            '📈Too high';
            score--;
            document.querySelector('.score').textContent = 
            score;
        }else{
            document.querySelector('.message').textContent = 
            '💥you lost the game';
            document.querySelector('.score').textContent = 
            0;
        }
        
    }else if(guess < secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = 
            '📈Too low';
            score--;
            document.querySelector('.score').textContent = 
            score;
        }else{
            document.querySelector('.message').textContent = 
            '💥you lost the game';
            document.querySelector('.score').textContent = 
            0;
        }
       
    }
})

// restore values #again

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    document.querySelector('.score').textContent = 
    score;

    secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 
    'Start Guessing...';
    document.querySelector('.guess').value = '';
    document.body.style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';

})