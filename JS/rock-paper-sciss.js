const js_result=document.querySelector(".js-result");
const js_moves = document.querySelector(".js-moves");
const js_score = document.querySelector(".js-score");
const rock_button=document.querySelector('.rock-button')
const paper_button=document.querySelector('.paper-button')
const scissors_button = document.querySelector(".scissors-button");

const score=JSON.parse(localStorage.getItem('score'))||{
        wins: 0,
        losses: 0,
        ties: 0


};


 updateScoreElement();




const beforeGame=(loading)=>
{
   if (loading) {
     js_result.innerHTML = `
      Let the games begin! Pick your move.  `;
   }

}

beforeGame(true);
   
 

//  document.querySelector('.js-result').innerHTML=`
 
//  You picked ${playerMove}.Computer picked ${compMove}.
//  \n You ${result}`;

rock_button.addEventListener("click", () => {
  beforeGame(false);
  playGame("Rock");
});


paper_button.addEventListener("click", () => {
  beforeGame(false);
  playGame("Paper");
});


scissors_button.addEventListener("click", () => {
  beforeGame(false);
  playGame("Scissors");
});


document.body.addEventListener('keydown',(event)=>
{
    if(event.key==='r')
    {
    playGame('Rock');
    }
    else if(event.key=='p')
    {
        playGame('Paper');   
    }
    else if(event.key=='s')
    {
        playGame('Scissors');   
    }
           
    
});




let isAutoPlaying= false;
let intervalID; 

function autoPlay()
{
   if(!isAutoPlaying)
   {

 intervalID=setInterval(function() {
    
     
     const playerMove=pickComputerMove();
     playGame(playerMove);
},4000);

isAutoPlaying=true;
   }

else{
clearInterval(intervalID);
isAutoPlaying=false;
}

}

function playGame(playerMove) {
  
        const compMove = pickComputerMove();
        let result = '';

        if (playerMove === 'Scissors') {


            if (compMove === 'Rock') {
                result = 'Lose';
            }
            else if (compMove === 'Paper') {
                result = 'Win!';
                
            }
            else if (compMove === 'Scissors') {
                result = 'Tie';
            }
        }

        else if (playerMove === 'Paper') {


            if (compMove === 'Rock') {
                result = 'Win!';
             
              
            }
            else if (compMove === 'Paper') {
                result = 'Tie';
            }
            else if (compMove === 'Scissors') {
                result = 'Lose';
            }

        }
        else if (playerMove === 'Rock') {


            if (compMove === 'Rock') {
                result = 'Tie';
            }
            else if (compMove === 'Paper') {
                result = 'Lose';
            }
            else if (compMove === 'Scissors') {
                result = 'Win!';
            
            }
        }


        if (result === 'Win!') {
            score.wins+=1;
            
         }
        else if (result === 'Lose') {
            score.losses+=1;
        }
        else if (result === 'Tie') {
            score.ties+=1;
        }

        localStorage.setItem('score', JSON.stringify(score));

        updateScoreElement();


js_moves.innerHTML = `
<div class="you">You </div><span><img src="/IMAGES/${playerMove}.png"> </span><div class="vs">VS</div><span><img src="/IMAGES/${compMove}.png"></span> <div class="computer">Computer</div>`;
 
document.querySelector('.js-result').innerHTML=showResult();
 

 function  showResult()
 {
     if (result === 'Win!') {
         
         js_result.innerHTML = `
         You ${result} <dotlottie-player src="https://lottie.host/6946924a-2e75-4910-9e5e-f9bdbda04bd0/oNAdBkixqK.json" background="transparent" speed="1" class="winGif1" loop autoplay></dotlottie-player>

    <dotlottie-player src="https://lottie.host/0b92ad88-5506-4834-b648-1e7a20dca248/rVn3VbtAlS.json" background="transparent" speed="1" class="winGif2" style="width=300px;height:300px" loop autoplay></dotlottie-player>`;
     
                    
      }
     else if (result === 'Lose') {
         js_result.innerHTML = `
        UH OH!  You ${result}. Keep Trying!  <dotlottie-player src="https://lottie.host/2046ae91-8d9b-4358-872e-e3fc1c531aa4/GMtYw6uTbZ.json" background="transparent" speed="1" class="lossGif" loop autoplay></dotlottie-player>


    `;
     }
     else if (result === 'Tie') {
         js_result.innerHTML = `
         It's a ${result}!\nHop onto the next round! <dotlottie-player src="https://lottie.host/6b6259e2-e2ba-4654-87ca-6784f7c527ac/BgwJEpzoa8.json" background="transparent" speed="1" class="tieGif"  loop autoplay></dotlottie-player> 
`;
     }
 }

 let x=showResult();
 console.log(x);




}

    function updateScoreElement()
{
 js_score.innerHTML=
`Wins:${score.wins}  Losses:${score.losses}  Ties:${score.ties}`;
}


    function pickComputerMove() {

        let compMove = '';


        const randomNo =Math.random();


        // console.log(typeof computerMove);

        if (randomNo >= 0 && randomNo < (1 / 3)) {
            compMove = ('Rock');
        }

        else if (randomNo >= (1 / 3) && randomNo < (2 / 3)) {
            compMove = ('Paper');
        }

        else if (randomNo >= (2 / 3) && randomNo <= 1) {
            compMove = ('Scissors');
        }


        return compMove;

    }



