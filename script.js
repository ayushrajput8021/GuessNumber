'use strict';

let number = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;
const displayMessage = function(message){
  document.querySelector('.message').textContent=message;
}
const displayScore = function(score){
  document.querySelector('.score').textContent=String(score);
}
const displayNumber = function(number){
  document.querySelector('.number').textContent=String(number);
}
document.querySelector('.check').addEventListener('click',function(){
  const guess = Number(document.querySelector('.guess').value);

  if(!guess)
  {
    displayMessage('No Number !');
  }
  else if(guess===number)
  {
    displayMessage('Correct Number !');
    displayNumber(number);
    document.querySelector('body').style.backgroundColor='#60b347';
    document.querySelector('.number').style.width='30rem';
    document.querySelector('.highscore').textContent=String(Math.max(score,highScore));
    highScore=score;
    document.querySelector('.hintText').textContent='';
  }
  else if(number!==guess)
  {
    if(score>1)
    {
      displayMessage(guess>number?  'Too High !':'Too Low !');
      score--;
      displayScore(score);
    }
    else{
      displayScore(0);
      displayMessage('You lost the game !');
    }
  }
});
document.querySelector('.again').addEventListener('click',function(){
  score=20;
  number = Math.trunc(Math.random()*20)+1;
  displayScore(20);
  displayNumber('?');
  document.querySelector('.guess').value='';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor='#222';
  document.querySelector('.number').style.width='15rem';
});
document.querySelector('.hint').addEventListener('click',function()
{
  document.querySelector('.hintText').textContent=number%2===0 ? 'Number is Even :)':'Number is Odd :)';
});
document.querySelector('.reset').addEventListener('click',function()
{
  document.querySelector('.highscore').textContent=String(0) ;
});