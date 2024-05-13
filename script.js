'use strict';
/*
document.querySelector('.message').textContent='Correct Number';
document.querySelector('.number').textContent=13;
document.querySelector('.score').textContent=10;

document.querySelector('.guess').value;
*/
const num=Math.trunc(Math.random()*20)+1;
document.querySelector('.number').textContent=num;
document.querySelector('.check').addEventListener('click',function (){
   const guess= Number(document.querySelector('.guess').value)
   console.log(guess);
   let score=20;

   if(!guess){
    document.querySelector('.message').textContent='Please enter a number ‼';
   }
   //when player wins
   else if(guess===num){
    document.querySelector('.message').textContent='🥳 correct number'

    document.querySelector('body').style.backgroundColor='#60b347'

    document.querySelector('.number').style.width='30rem';
   }
   //when guess is too high
   else if(guess>num){
    if(score>1){
        document.querySelector('.message').textContent="Too high"
    score-=1;
    document.querySelector('.score').textContent=score;
    }else{
        document.querySelector('.message').textContent="You Lost the game 😥"
    }
    
   }else if(guess<num){
    if(score>1){
        document.querySelector('.message').textContent="Too Low"
    score-=1;
    document.querySelector('.score').textContent=score;
    }else{
        document.querySelector('.message').textContent="You Lost the game 😥"
    }
   }
});


