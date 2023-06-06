document.addEventListener('DOMContentLoaded' , () => {

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

    
    const canHeight = 80;
    const canWidth = 70;
    const oceanMixHeight = 590;


     
    var moveSpace = 10;
    var presentLevel = 1;
    let scoreShow = 0;
    let level = 1;
    let strikeCount = 0;
    let bulletElement;
    



    function init(){
        startButton.addEventListener("click", startPlay);
    }



    function startPlay(){
        // console.log(100)
        // var presentLevel = 1;
        // presentLevel += 1;

        landingMessage.classList.add("hide");
        scoreView.style.display = 'block';
        levelView.style.display = 'block';
        

        gameOverScreen.classList.add("hide");


        freshWater.classList.remove("hide");
        freshSky.classList.remove("hide");

        badWater.style.display = 'none';
        pollutedSky.style.display = 'none';
    
        // badWater.style.display = 'block';
   
        let left = 0
        let score = 0
        let bulletSpeed = 3
        let canSpeed = 90
        let bulletTop = 430
        // let top = 416
        // let isGameOver = false;
        // let canTop = 0
        // let bulletFire = false
        let bulletLeft = 60
        let guardFishTop = 420;
        let bulletElement;
        let finalscore;
        let levelTwoEnter = false;
        let levelThreeEnter= false;


        const levelElement = document.querySelector('.levelView');
        levelElement.textContent = "Level :"+ level;


        if(presentLevel === 2){
            bulletSpeed = 2;
            canSpeed = 60;
            levelTwoEnter = true;
            // level += 1;
            
        }

        if(presentLevel === 4){
            bulletSpeed = 1;
            canSpeed = 50;
            levelThreeEnter = true;
            // level += 1;

        }
        document.addEventListener('keydown', controlMovement)
        document.addEventListener('keydown', shoot)

            

            function objectCan(canLeftParam, cantopparam){
                let canLeft = canLeftParam || 0;
                let canTop = cantopparam || 0
                const can = document.createElement('div');
                can.classList.add('canMove1');
                gameContainer.appendChild(can);

                can.style.left = canLeft + 'px';
                can.style.top = canTop + 'px'


                function moveCan(){

                    canTop += 2
                    can.style.top = canTop + 'px'
 
                if (canTop === oceanMixHeight){
                    clearInterval(timerId)
                    gameContainer.removeChild(can)

                    // gameContainer.removeChild(freshWater)
                    badWater.style.display = 'block';
                    pollutedSky.style.display = 'block';

                    freshWater.classList.add("hide");
                    freshSky.classList.add("hide");
                    gameOver();

               
                }

                // collision();
               
                         
                }
                 let timerId = setInterval(moveCan, canSpeed);

               
                let canId = Math.floor(Math.random()*(8-1))+1;
                can.setAttribute('id', canId)

                    return {
            id:canId,
            element: can
        };
    }

    
    let surviving_cans  =[];
    for(let i =0; i<8;i++){
        const object_can =  objectCan(i*70, 0);
        surviving_cans.push(object_can);
        const canPosition = object_can
        console.log(canPosition)
    }
    let surviving_cans2  =[];
    
    // console.log(levelTwoEnter);

    if(levelTwoEnter){

        for(let i =0; i<8;i++){
            const object_can =  objectCan(i*70 , -300);
            surviving_cans2.push(object_can);
            const canPosition = object_can
            console.log(canPosition)
        }  

    console.log('individual can id:',surviving_cans2)

    }

    console.log('individual can id:',surviving_cans)


        function controlMovement(e) {
            if (e.keyCode === 37 && left > 0) {
                left -=20
                fish.style.left = left + "px";
            }
    
            if (e.keyCode === 39 && left < 460){
                left +=20
                fish.style.left = left + "px";
            }
        }
        
    
        function shoot(e) {
            // let bulletTop = 40
    
            if (e.keyCode === 32 ){
                // bullet.style.display = 'block';
            
    
                bulletTop = 430
                function showBullet(){
                const bullet = document.createElement("div");
                bullet.classList.add("bullet");
                gameContainer.appendChild(bullet);
                // var top = 800;
                
                bullet.style.top = bulletTop + 'px'
                bullet.style.left = bulletLeft + 'px'
                    
                function moveBullet(){
                    // top -= 1
                    // bullet.style.top = top + 'px'
                    bulletTop-=2
                    bullet.style.top = bulletTop + 'px'
                    bulletLeft = left + 55
                    bullet.style.left = bulletLeft + 'px'  
    
                    if(bulletTop === 30){
                        clearInterval(timerId)
                        gameContainer.removeChild(bullet)
                    } 
                    bulletElement = bullet;
                    collision();

                }
                let timerId = setInterval(moveBullet, bulletSpeed)
                bulletFire = false;

                

                }
    
                showBullet();
            }
            // return {
            //     bulletElement,
            //   };

        }

        collision();
        // collision2();

        
        function collision() {
   
            let strikeCount = 0;

            for (let i = 0; i < surviving_cans.length; i++) {
              const object1 = document.getElementById(surviving_cans[i].id);
              const rect1 = object1.getBoundingClientRect();
              const canTopPosition = rect1.top;
              const canLeftPosition = rect1.left;
              
            //   console.log("bullet left",bulletLeft)
            //   console.log("CAN left",canLeftPosition)

            //   bulletFix = bulletLeft + 75
            //   const bulletFinal = document.querySelector(".bullet");
            //   const bulletRect = bulletFinal.getBoundingClientRect(); 
              const bulletRect = bulletElement.getBoundingClientRect(); 
              
              const bulletTopPosition = bulletRect.top;
              const bulletLeftPosition = bulletRect.left;
              
            //   console.log("bullet left",bulletLeftPosition)

            //   console.log(rect1)
            //   console.log(bulletRect)

              if(presentLevel === 1){


             
              if (
                canTopPosition + canHeight >= bulletTopPosition 
                && canTopPosition + canHeight <= guardFishTop
                && bulletLeftPosition + (i * canWidth)>= canLeftPosition + i * canWidth
                && bulletLeftPosition + (i * canWidth)< canLeftPosition + canWidth + i * canWidth
            


              ) {
                console.log("Bullet hit1!");
          
                //Remove the element from the array  of the surviving_cans
                surviving_cans.splice(i, 1);
          
                //Remove the can from the screen
                gameContainer.removeChild(object1);
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
            
             }else if (presentLevel === 2 || presentLevel === 3){
            // }else if (levelTwoEnter){
            

            if (
                canTopPosition + canHeight >= bulletTopPosition &&
                canTopPosition + canHeight <= guardFishTop &&
                bulletLeftPosition + i * canWidth >= canLeftPosition + i * canWidth &&
                bulletLeftPosition + i * canWidth < canLeftPosition + canWidth + i * canWidth
              ) {console.log('Bullet hit2!');
          

                  // Perform the desired action only when the condition has been satisfied twice
                  surviving_cans.splice(i, 1);
                  gameContainer.removeChild(object1);
                  gameContainer.removeChild(bulletElement);
                  i--;
          
                  score++;
                  finalscore = score;
                  scoreShow = score;
                  const scoreElement = document.querySelector('.scoreView');
                  scoreElement.textContent = 'Score :' + score;
                  strikeCount = 0;

                }

            //     console.log('Bullet hit2!');
          

            //     strikeCount += 1;
            //     console.log(strikeCount);

            //   }
            //     if (strikeCount === 1) {
            //       // Perform the desired action only when the condition has been satisfied twice
            //       surviving_cans.splice(i, 1);
            //       gameContainer.removeChild(object1);
            //       gameContainer.removeChild(bulletElement);
            //       i--;
          
            //       score++;
            //       finalscore = score;
            //       scoreShow = score;
            //       const scoreElement = document.querySelector('.scoreView');
            //       scoreElement.textContent = 'Score :' + score;
            //       strikeCount = 0;

            //     }

            }
        



                

            // if(levelTwoEnter){

            // for (let i = 0; i < surviving_cans2.length; i++) {
            //     const object3 = document.getElementById(surviving_cans2[i].id);
            //     const rect3 = object3.getBoundingClientRect();
            //     const canTopPosition3 = rect3.top;
            //     const canLeftPosition3 = rect3.left;
                
            //   //   console.log("bullet left",bulletLeft)
            //   //   console.log("CAN left",canLeftPosition)
  
            //   //   bulletFix = bulletLeft + 75
            //   //   const bulletFinal = document.querySelector(".bullet");
            //   //   const bulletRect = bulletFinal.getBoundingClientRect(); // Access the bullet element's bounding client rect
            //     const bulletRect = bulletElement.getBoundingClientRect(); // Access the bullet element's bounding client rect
                
            //     const bulletTopPosition = bulletRect.top;
            //     const bulletLeftPosition = bulletRect.left;
                
            //   //   console.log("bullet left",bulletLeftPosition)
  
            //     console.log(rect3)
            //   //   console.log(bulletRect)
  
  
  
               
            //     if (
            //       canTopPosition3 + canHeight >= bulletTopPosition 
            //       && canTopPosition3 + canHeight <= guardFishTop
            //       && bulletLeftPosition + (i * canWidth)>= canLeftPosition3 + i * canWidth
            //       && bulletLeftPosition + (i * canWidth)< canLeftPosition3 + canWidth + i * canWidth
            //     ) {
            //       console.log("Bullet hit1!");
            
            //       //Remove the element from the array  of the surviving_cans
            //       surviving_cans.splice(i, 1);
            
            //       //Remove the can from the screen
            //       gameContainer.removeChild(object3);
            //       gameContainer.removeChild(bulletElement)
  
            
            //       //Loop counter reduced for removed element
            //       i--;
            
            //       // Increase the score by a unit whenever the collision occurs
            //       score++;
            //       finalscore = score;
            //       scoreShow = score;
            //       const scoreElement = document.querySelector('.scoreView');
            //       scoreElement.textContent = "Score :"+ score;
            //     }
              
            





            // for (let i = 0; i < surviving_plastics.length; i++) {
            //     const object2 = document.getElementById(surviving_plastics[i].id);
            //     const rect2 = object2.getBoundingClientRect();
            //     const plasticTopPosition = rect2.top;
            //     const plasticLeftPosition = rect2.left;
            
            //     const bulletRect = bulletElement.getBoundingClientRect();
            //     const bulletTopPosition = bulletRect.top;
            //     const bulletLeftPosition = bulletRect.left;
            
            //     if (
            //       plasticTopPosition + plasticHeight >= bulletTopPosition &&
            //       plasticTopPosition + plasticHeight <= guardFishTop &&
            //       bulletLeftPosition + i * plasticWidth >= plasticLeftPosition + i * plasticWidth &&
            //       bulletLeftPosition + i * plasticWidth < plasticLeftPosition + plasticWidth + i * plasticWidth
            //     ) {
            //       console.log('Bullet hit!');
            //       strikeCount++;
            //     // }
            
            //     // if (strikeCount === 1) {
            //       surviving_plastics.splice(i, 1);
            //       gameContainer.removeChild(object2);
            //       gameContainer.removeChild(bulletElement);
            //       i--; 
            
            //       score++;
            //       finalscore = score;
            //       scoreShow = score;
            //       const scoreElement = document.querySelector('.scoreView');
            //       scoreElement.textContent = 'Score :' + score;
            //       strikeCount = 0;
            //     // }
            //   }
            // }
            
            
               
        
                // if(finalscore === 8 || finalscore === 16 || finalscore  == 18){
                if(finalscore >= 8 && presentLevel === 1){

                    console.log("game over")
                    if(presentLevel === 1){
                        gameOver();

                    }
                    presentLevel += 1;


                    console.log(scoreShow)
                    console.log("level-",presentLevel)
                        
                    // }else if(presentLevel === 3){
                    //     startLevel3();
                    // }
                }

                
                // if (presentLevel === 3 && finalscore >= 8 && levelTwoEnter){
                //     startLevel2();
                // }
        }
                // if(presentLevel === 1 && finalscore === 8){
                //     }
              
        



                if (finalscore >= 8 && presentLevel == 2){
        
                for (let i = 0; i < surviving_cans2.length; i++) {
                const object2 = document.getElementById(surviving_cans2[i].id);
                const rect2 = object2.getBoundingClientRect();
                const plasticTopPosition = rect2.top;
                const plasticLeftPosition = rect2.left;
            
                const bulletRect = bulletElement.getBoundingClientRect();
                const bulletTopPosition = bulletRect.top;
                const bulletLeftPosition = bulletRect.left;
                    console.log(800)
                    console.log("plasticTopo", plasticLeftPosition, "plasticheight", plasticHeight, "bulletTopPos", bulletTopPosition );
                    console.log("bulletLrft", bulletLeftPosition, "plasticWidth", plasticWidth, "plasticLeft", plasticLeftPosition)
                if (
                  plasticTopPosition + plasticHeight >= bulletTopPosition &&
                  plasticTopPosition + plasticHeight <= guardFishTop &&
                  bulletLeftPosition + i * plasticWidth >= plasticLeftPosition + i * plasticWidth &&
                  bulletLeftPosition + i * plasticWidth < plasticLeftPosition + plasticWidth + i * plasticWidth
                ) {
                  console.log('2Bullet hit!');
                  strikeCount++;
                // }
            
                // if (strikeCount === 1) {
                    surviving_cans2.splice(i, 1);
                  gameContainer.removeChild(object2);
                  gameContainer.removeChild(bulletElement);
                  i--; 
            
                  score++;
                  finalscore = score;
                  scoreShow = score;
                  const scoreElement = document.querySelector('.scoreView');
                  scoreElement.textContent = 'Score :' + score;
                  strikeCount = 0;
                // }
              }
            }
        }

              if(finalscore == 16 && levelTwoEnter && level === 2){

                console.log("game over")
                if(presentLevel === 1){
                    gameOver();
                }
                presentLevel += 1;

                if(levelTwoEnter && scoreShow >= 16){
                    gameOver();
                }

                console.log(scoreShow)
                console.log("level-",presentLevel)
                    
                // }else if(presentLevel === 3){
                //     startLevel3();
                // }
            }

            
    
            if (presentLevel === 3 && finalscore >= 8 && levelTwoEnter){
                startLevel2();
            }
            
              
            }
           
          
                    

          function gameOver(){
            document.removeEventListener('keydown', controlMovement)
            document.removeEventListener('keydown', shoot)
       
            
            
            
            scoreView.style.display = 'none';
            levelView.style.display = 'none';

            // finalScoreView.textContent = "Final Score: " + score; // Set the final score
            finalScoreView.innerHTML ="Final Score: " + score;
            // gameOverScreen.classList.remove("hide"); // Display the game over screen
            gameOverScreen.style.display = 'block';

            //move the fish to the left side og the game container to continue playing the game
            left = 0;
            fish.style.left = left + "px";

            // if(finalscore === 8){
            // showInLevel2.style.display = 'block';


            // }


            playAgainButton.addEventListener("click", playAgain);

            }

              
        }
    
        
        

        

        function playAgain(){
            // gameOverScreen.classList.add("hide");
            scoreView.style.display = 'block';
            levelView.style.display = 'block';

            gameOverScreen.style.display = 'none';

            console.log('inside play again')
            

            if(presentLevel === 1 && scoreShow < 8){
                freshWater.classList.remove("hide");
                freshSky.classList.remove("hide");

                badWater.style.display = 'none';
                pollutedSky.style.display = 'none';
                console.log('level-1 again')
                startPlay();
            

            } else if (presentLevel === 2){
                // presentLevel += 1;
                // levelTwoEnter = true;
                level += 1;
                startPlay();
                // if (presentLevel === 3 && finalscore >= 8 && levelTwoEnter){
                //     startLevel2();
                // }
                // startPlay();  

            }else if(presentLevel === 3 && scoreShow <= 16){
            // }else if(presentLevel === 3 && scoreShow <= 16){
                level += 1;
                startLevel3();
            }  
            
            collision();
        }

       

       

        
        init();
        
    })
  


   


   