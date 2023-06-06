    const gameContainer = document.querySelector(".gameContainer");
    const landingMessage = document.querySelector(".messageCloud");
    const startButton = document.querySelector(".startButton");
    const freshWater = document.querySelector(".oceanWater");
    const badWater = document.querySelector(".badWater");
    const freshSky = document.querySelector(".skySpace");
    const pollutedSky = document.querySelector(".pollutedSky");
    const fish = document.querySelector(".guradFish");
    const scoreView = document.querySelector(".scoreView");
    const bullet = document.querySelector(".bullet");
    const grid = document.querySelector(".grid");
    const square = document.createElement('div');
    const finalscore =  document.querySelector(".finalScoreView");
    const gameOverScreen = document.querySelector(".gameOverScreen");
    const finalScoreView = document.querySelector(".finalScoreView");
    const playAgainButton = document.querySelector(".playAgainButton");
    const levelView = document.querySelector(".levelView");
   
    // import {
    //     bulletElement
    //   } from './jsOcean_2.js';

      // Access the bulletElement variable
    //   console.log(bulletElement);

    var moveSpace = 10;
    var presentLevel = 1;
    let scoreShow = 0;
    let level = 1;

    const plasticHeight = 80;
    const plasticWidth = 70;
    let plasticSpeed = 50;
    
    const oceanMixHeight = 590;

    function startLevel2(){
    console.log('enter level-2')
    // presentLevel = 2;
    score = 0;

    // left = 0;
    // fish.style.left = left + "px";
    
    startPlay2();
    // startPlay();


}

function startPlay2(){
    console.log("twooo")

    let left = 0
    let top = 416
    let score = 0
    let bulletSpeed = 3
    
    let bulletTop = 430
    let isGameOver = false;
    let bulletLeft = 60
    let canTop = 300
    let bulletFire = false
    let guardFishTop = 420;
    let bulletElement;
    let finalscore;
    let levelTwoEnter = false;
    let levelThreeEnter= false;

    
    // document.addEventListener('keydown', controlMovement)
    // document.addEventListener('keydown', shoot)

        

        function objectPlastic(plasticLeftParam){
            let plasticLeft = plasticLeftParam || 0;
            let plasticTop = -400
            const plastic = document.createElement('div');
            plastic.classList.add('plasticMove');
            gameContainer.appendChild(plastic);

            plastic.style.left = plasticLeft + 'px';
            plastic.style.top = plasticTop + 'px'


            function movePlastic(){

                plasticTop += 2
                plastic.style.top = plasticTop + 'px'

            if (plasticTop === oceanMixHeight){
                clearInterval(timerId)
                gameContainer.removeChild(plastic)

                
                
                // gameContainer.removeChild(freshWater)
                // badWater.style.display = 'block';
                // pollutedSky.style.display = 'block';
    
                // freshWater.classList.add("hide");
                // freshSky.classList.add("hide");
                // gameOver();
            }

            // collision(); 
            }
             let timerId = setInterval(movePlastic, plasticSpeed);

           
            let plasticId = Math.floor(Math.random()*(20-10))+10;
            plastic.setAttribute('id', plasticId)

                return {
        id: plasticId,
        element: plastic
    };
}


let surviving_plastic  = [];
for(let i =0; i<8;i++){
    const object_plastic =  objectPlastic(i*70);
    surviving_plastic.push(object_plastic);
    const plasticPosition = object_plastic
    console.log(plasticPosition)
}

console.log('individual plastic id:',surviving_plastic)


collision2();

    
function collision2() {
    for (let i = 0; i < surviving_plastic.length; i++) {
      const object2 = document.getElementById(surviving_plastic[i].id);
      const rect2 = object2.getBoundingClientRect();
      const plasticTopPosition = rect2.top;
      const plasticLeftPosition = rect2.left;

      console.log(rect2)
      
      //   console.log("bullet left",bulletLeft)
      //   console.log("CAN left",canLeftPosition)
      
      //   bulletFix = bulletLeft + 75
      //   const bulletFinal = document.querySelector(".bullet");
      //   const bulletRect = bulletFinal.getBoundingClientRect(); // Access the bullet element's bounding client rect
      const bulletRect = bulletElement.getBoundingClientRect(); // Access the bullet element's bounding client rect
      console.log(bulletRect)
      
      const bulletTopPosition = bulletRect.top;
      const bulletLeftPosition = bulletRect.left;
      
    //   console.log("bullet left",bulletLeftPosition)

      console.log(rect2)
      console.log(bulletRect)


      if (
        plasticTopPosition + plasticHeight >= bulletTopPosition 
        && plasticTopPosition + plasticHeight <= guardFishTop
        && bulletLeftPosition + (i * plasticWidth)>= plasticLeftPosition + i * plasticWidth
        && bulletLeftPosition + (i * plasticWidth)< plasticLeftPosition + plasticWidth + i * plasticWidth
    


      ) {
        console.log("Bullet hit!");
  
        //Remove the element from the array  of the surviving_cans
        surviving_cans.splice(i, 1);
  
        //Remove the can from the screen
        gameContainer.removeChild(object2);
        gameContainer.removeChild(bulletElement)

  
        //Loop counter reduced for removed element
        i--;
  
        // Increase the score by a unit whenever the collision occurs
        score++;
        finalscore = score;
        scoreShow = score;
        const scoreElement = document.querySelector('.scoreView');
        scoreElement.textContent = "Score :"+ score;
      }

    }
}
}     






























// else if (presentLevel === 2 && presentLevel === 3){

//     if (
//         canTopPosition + canHeight >= bulletTopPosition 
//         && canTopPosition + canHeight <= guardFishTop
//         && bulletLeftPosition + (i * canWidth)>= canLeftPosition + i * canWidth
//         && bulletLeftPosition + (i * canWidth)< canLeftPosition + canWidth + i * canWidth
//       )
//     { 
//         console.log("Bullet hit!");
//         strikeCount++;
//     }
    
//     if( strikeCount === 2){
//         //Remove the element from the array  of the surviving_cans
//         surviving_cans.splice(i, 1);
  
//         //Remove the can from the screen
//         gameContainer.removeChild(object1);
//         gameContainer.removeChild(bulletElement)

  
//         //Loop counter reduced for removed element
//         i--;
  
//         // Increase the score by a unit whenever the collision occurs
//         score++;
//         finalscore = score;
//         scoreShow = score;
//         const scoreElement = document.querySelector('.scoreView');
//         scoreElement.textContent = "Score :"+ score;
//     }

//     }





//     function controlMovement(e) {
//         if (e.keyCode === 37 && left > 0) {
//             left -=20
//             fish.style.left = left + "px";
//         }

//         if (e.keyCode === 39 && left < 460){
//             left +=20
//             fish.style.left = left + "px";
//         }
//     }
// }  

    // function shoot(e) {
    //     // let bulletTop = 40

    //     if (e.keyCode === 32 ){
    //         // bullet.style.display = 'block';
        

    //         bulletTop = 430
    //         function showBullet(){
    //         const bullet = document.createElement("div");
    //         bullet.classList.add("bullet");
    //         gameContainer.appendChild(bullet);
    //         // var top = 800;
            
    //         bullet.style.top = bulletTop + 'px'
    //         bullet.style.left = bulletLeft + 'px'
                
    //         function moveBullet(){
    //             // top -= 1
    //             // bullet.style.top = top + 'px'
    //             bulletTop-=2
    //             bullet.style.top = bulletTop + 'px'
    //             bulletLeft = left + 75
    //             bullet.style.left = bulletLeft + 'px'  

    //             if(bulletTop === 30){
    //                 clearInterval(timerId)
    //                 gameContainer.removeChild(bullet)
    //             } 
    //             bulletElement = bullet;
    //             collision();

    //         }
    //         let timerId = setInterval(moveBullet, bulletSpeed)
    //         bulletFire = false;

            

    //         }

    //         showBullet();
    //     }
    // }



   
            
            
            // if(finalscore === 8 || finalscore === 16 || finalscore  == 18){
    //         if(finalscore >= 8){

    //             console.log("game over")
    //             if(presentLevel === 1){
    //                 gameOver();
    //             }
    //             presentLevel += 1;


    //             console.log(scoreShow)
    //             console.log("level-",presentLevel)
                    
    //             // }else if(presentLevel === 3){
    //             //     startLevel3();
    //             // }
    //         }

            
    //         if (presentLevel === 3 && finalscore >= 8 && levelTwoEnter){
    //             startLevel2();
    //         }
    //         // if(presentLevel === 1 && finalscore === 8){
    //         //     }
    //       }
          
    //     }
       
    //   }
      

    // //   if(levelTwoEnter === true){
    // //     level += 1;
        
    // // } else if(levelThreeEnter === true){
    // //     level += 1;

    // // }

    // // const levelElement = document.querySelector('.levelView');
    // // levelElement.textContent = "Level :"+ level;

    //   function gameOver(){
    //     document.removeEventListener('keydown', controlMovement)
    //     document.removeEventListener('keydown', shoot)
   
        
        
        
    //     scoreView.style.display = 'none';
    //     levelView.style.display = 'none';

    //     // finalScoreView.textContent = "Final Score: " + score; // Set the final score
    //     finalScoreView.innerHTML ="Final Score: " + score;
    //     // gameOverScreen.classList.remove("hide"); // Display the game over screen
    //     gameOverScreen.style.display = 'block';

    //     //move the fish to the left side og the game container to continue playing the game
    //     left = 0;
    //     fish.style.left = left + "px";


    //     playAgainButton.addEventListener("click", playAgain);

    //     }

          
    // }

    // function playAgain(){
    //     // gameOverScreen.classList.add("hide");
    //     scoreView.style.display = 'block';
    //     levelView.style.display = 'block';

    //     gameOverScreen.style.display = 'none';

    //     console.log('inside play again')
        

    //     if(presentLevel === 1 && scoreShow < 8){
    //         freshWater.classList.remove("hide");
    //         freshSky.classList.remove("hide");

    //         badWater.style.display = 'none';
    //         pollutedSky.style.display = 'none';
    //         console.log('level-1 again')
    //         startPlay();
        

    //     } else if (presentLevel === 2){
    //         // presentLevel += 1;
    //         // levelTwoEnter = true;
    //         level += 1;
    //         startPlay();
    //         if (presentLevel === 3 && finalscore >= 8 && levelTwoEnter){
    //             startLevel2();
    //         }
    //         // startPlay();  

    //     }else if(presentLevel === 3 && scoreShow <= 16){
    //     // }else if(presentLevel === 3 && scoreShow <= 16){
    //         level += 1;
    //         startLevel3();
    //     }  
        
    // }

   

   








