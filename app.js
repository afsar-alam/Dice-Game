 

var  scores, roundscore, activeplayer,gamePlaying;
 init();


 document.querySelector('.btn-roll').addEventListener('click', function() {
   if(gamePlaying){
    var dice=Math.floor(Math.random() * 6) + 1;
    var  diceDOM=document.querySelector('.dice');
    diceDOM.style.display='block';
    diceDOM.src="image/dice-"+dice+'.png';
   
   if(dice !== 1){
     roundscore +=dice;
     document.querySelector('#current-'+ activeplayer).textContent=roundscore;
   }
     else{
        nextplayer();
     }

   }
 
 });

 document.querySelector('.btn-hold').addEventListener('click', function(){
   if(gamePlaying){
    scores[activeplayer] +=roundscore;
    document.querySelector('#score-' +activeplayer).textContent=scores[activeplayer];
    if(scores[activeplayer] >=100){
      document.querySelector('#name-'+activeplayer).textContent ="Winner!";
      document.querySelector('.dice').style.display ='none';
      document.querySelector('.player-'+activeplayer+'-panal').classList.add('winner');
      document.querySelector('.player-'+activeplayer+'-panal').classList.remove('active');
      gamePlaying=false;
    }
    else{
     nextplayer();
   
    }
     
   }



 });
 document.querySelector('.btn-new').addEventListener('click',init);
   


 function nextplayer(){
  activeplayer === 0 ? activeplayer =1: activeplayer = 0;
  roundscore=0;
  document.querySelector('#current-0').textContent = '0';
  document.querySelector('#current-1').textContent ='0';
  document.querySelector('.player-0-panal').classList.toggle('active');
  document.querySelector('.player-1-panal').classList.toggle('active');
  document.querySelector('.dice').style.display='none';

 }

 function init(){
  scores =[0,0];
  roundscore=0;
  activeplayer=0;
  gamePlaying=true
   document.querySelector('.dice').style.display='none';
   document.querySelector('#score-0').textContent = '0';
   document.querySelector('#score-1').textContent = '0';
   document.querySelector('#current-0').textContent = '0';
   document.querySelector('#current-1').textContent ='0';
   document.querySelector('#name-0').textContent='player 1';
   document.querySelector('#name-1').textContent='player 2';

   document.querySelector('.player-0-panal').classList.remove('winner!');
   document.querySelector('.player-1-panal').classList.remove('winner!') ;
   document.querySelector('.player-0-panal').classList.remove('active') ;
   document.querySelector('.player-1-panal').classList.remove('active') ;
   document.querySelector('.player-0-panal').classList.add('active') ;

 }