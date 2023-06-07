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

    const showInstruction2 = document.querySelector(".showInstruction2");
    const showInstruction1 = document.querySelector(".showInstruction1");
    const showInLevel2 = document.querySelector(".showInLevel2");
    const showInLevel3 = document.querySelector(".showInLevel3");
    const continueplay = document.querySelector(".continueplay");

    
    const canHeight = 80;
    const canWidth = 70;
    const oceanMixHeight = 590;

    var gameTrackCount = 1;

    let scoreShow = 0;
    let level = 1;
    let strikeCount = 0;
    let bulletElement;
    let randomStrikeCount;
    let canNumber = 8;

    

    //first funtion to start the game
    function init(){
        //on clicking the start button, the game will start using click as an event listner and call function startPlay
        startButton.addEventListener("click", startPlay);
    }


    //funtion to start the game
    function startPlay(){

        console.log(gameTrackCount)
        // console.log()
        //hide the instruction in the cloud button, score view, level view, gameover screen, polluted water and polluted sky image 
        // and show the fresh water image and fresh sky 
        landingMessage.classList.add("hide");
        scoreView.style.display = 'block';
        levelView.style.display = 'block';
        
        gameOverScreen.classList.add("hide");

        freshWater.classList.remove("hide");
        freshSky.classList.remove("hide");

        badWater.style.display = 'none';
        pollutedSky.style.display = 'none';

        //hide the score view and level view
        scoreView.style.display = 'block';
        levelView.style.display = 'block';

        //display the game over screen
        gameOverScreen.style.display = 'none';

   
        let left = 0;
        let score = 0;
        let bulletTop = 430;
        let bulletLeft = 60;
        let guardFishTop = 420;
        let bulletElement;
        let finalscore;
        let randomStirkeCount = 1;
        let levelTwoEnter = false;
        let levelThreeEnter= false;

        let bulletSpeed = 3;
        let canSpeed = 90;


        //show the level of the game play
        const levelElement = document.querySelector('.levelView');
        levelElement.textContent = "Level :"+ level;

        //conditions update for the level 2 
        if(gameTrackCount === 2 || gameTrackCount === 3){
            bulletSpeed = 2;
            canSpeed = 50;
            levelTwoEnter = true;            
        }

        //conditions update for the level 3

        // if(gameTrackCount === 4){
        //     bulletSpeed = 1;
        //     canSpeed = 50;
        //     levelThreeEnter = true;
        // }

        //on pressing the "left and right arrow keys", call the function to control the movement of the guard fish
        document.addEventListener('keydown', controlMovement)

        // on pressing the "space bar", call the function to fire bullet by the guard fish
        document.addEventListener('keydown', shoot)

            
            //create the cans on the screen and move can downwards continuosly
            function objectCan(canLeftParam, cantopparam){
                let canLeft = canLeftParam || 0;
                let canTop = cantopparam || 0
                const can = document.createElement('div');
                // iff
                can.classList.add('canMove1');
                gameContainer.appendChild(can);

                can.style.left = canLeft + 'px';
                can.style.top = canTop + 'px'

                //move the can downwards in specified speed by 2px
                function moveCan(){
                    canTop += 2
                    can.style.top = canTop + 'px'
                
                //condition and operation for the imputities mixing in the ocean ang game being over
                if (canTop === oceanMixHeight){

                    //hide can and stop moving the can
                    clearInterval(timerId)
                    gameContainer.removeChild(can)

                    badWater.style.display = 'block';
                    pollutedSky.style.display = 'block';

                    freshWater.classList.add("hide");
                    freshSky.classList.add("hide");
                    gameOver();
               
                }

                }

                //to move the cans as per the canSpeed in miliseconds
                let timerId = setInterval(moveCan, canSpeed);
               
                //generate random and set id for the cans from 1-8 returned from this fucntion
                let canId = Math.floor(Math.random()*(8-1))+1;
                can.setAttribute('id', canId)

                    //return can with can id
                    return {
                        id:canId,
                        element: can
                    };
    }

    //generating returned arrays of the cans
    let surviving_cans  =[];
    for(let i =0; i<8;i++){

        //call the function with canging parameters of top and left posiotion of cans
        const object_can =  objectCan(i*70, 0);
        surviving_cans.push(object_can);
        const canPosition = object_can
        console.log(canPosition)
    }
    let surviving_cans2  =[];
    


    //if level - 2, then generate other row of cans with specific distance from the top
    // if((levelTwoEnter && level === 2)|| (levelTwoEnter && level === 3)){
    if(levelTwoEnter|| gameTrackCount === 3){

        for(let i =0; i<canNumber;i++){
            const object_can =  objectCan(i*70 , -300);
            surviving_cans2.push(object_can);
            const canPosition = object_can
        }  

    console.log('individual can, second row id:',surviving_cans2)

    }

    console.log('individual can, first row id:',surviving_cans)

    if(gameTrackCount === 3 ){
    function objectCan(){
        let canLeft = 0;
        let canTop = 0;
        let canTop2 = 0;
        const floatPlastic = document.createElement('div');
        floatPlastic.classList.add('plasticMove');
        gameContainer.appendChild(floatPlastic);

        const floatPlastic2 = document.createElement('div');


        floatPlastic2.classList.add('plasticMove');
        gameContainer.appendChild(floatPlastic2);

        can.style.left = canLeft + 'px';
        can.style.top = canTop + 'px'

        let canLeft2 = 70 
        can2.style.left = canLeft2 +  'px';
        can2.style.top = canTop2 + 'px'
    }



        can();
    }

            


        // right and left movement control of the guard fish with maximum left and right ends
        function controlMovement(e) {
            //left arrow key 
            if (e.keyCode === 37 && left > 0) {
                left -=20
                fish.style.left = left + "px";
            }
            
            //right arrow key 
            if (e.keyCode === 39 && left < 460){
                left +=20
                fish.style.left = left + "px";
            }
        }
        
        //to shoot bullet with "space bar" press
        function shoot(e) {
    
            if (e.keyCode === 32 ){
             
                bulletTop = 430

                //generate bullet right on the top of the guard fish
                function showBullet(){
                const bullet = document.createElement("div");
                bullet.classList.add("bullet");
                gameContainer.appendChild(bullet);
                
                bullet.style.top = bulletTop + 'px' 
                bullet.style.left = bulletLeft + 'px'
                        
                //move the bullet in upward direction
                function moveBullet(){
                    bulletTop-=2
                    bullet.style.top = bulletTop + 'px'
                    bulletLeft = left + 55
                    bullet.style.left = bulletLeft + 'px'  
                    
                    //remove bulllet on the maximum px of the screen
                    if(bulletTop === 30){
                        clearInterval(timerId)
                        gameContainer.removeChild(bullet)
                    } 
                    bulletElement = bullet;

                    //check collision of bullet ans impure objects
                    collision();

                }

                //to move the cans as per the canSpeed in miliseconds

                let timerId = setInterval(moveBullet, bulletSpeed)
                bulletFire = false;

                }

                //function call to generate bullet on the screen
                showBullet();
            }
        }
        

        //function call for detection of collision between the bullet and fallign impurities
        collision();

        //ckeck the collision between the bullet and cans by only one hit
        function collision() {
   
            let strikeCount = 0;
            for (let i = 0; i < surviving_cans.length; i++) {
              const object1 = document.getElementById(surviving_cans[i].id);

              //determining the position of each of the falling cans
              const rect1 = object1.getBoundingClientRect();

              const canTopPosition = rect1.top;
              const canLeftPosition = rect1.left;
              
              //determining the position of each of the fired bullet
              const bulletRect = bulletElement.getBoundingClientRect(); 
              
              const bulletTopPosition = bulletRect.top;
              const bulletLeftPosition = bulletRect.left;
            
              //track the flow of the game and add condition add the conditions of level - 1
            //   if(gameTrackCount === 1 || gameTrackCount === 4){
              if(gameTrackCount === 1){

             
              //logic for collision check between the bullet and the cans which disappera by one hit
              if (
                canTopPosition + canHeight >= bulletTopPosition 
                && canTopPosition + canHeight <= guardFishTop
                && canTopPosition <= bulletTopPosition
                && bulletLeftPosition + (i * canWidth)>= canLeftPosition + i * canWidth
                && bulletLeftPosition + (i * canWidth)< canLeftPosition + canWidth + i * canWidth
            
              ) {
                console.log("Bullet hit1!");
          
                //Remove the element from the array  of the surviving_cans
                surviving_cans.splice(i, 1);
          
                //Remove the can and bullet from the screen
                gameContainer.removeChild(object1);
                gameContainer.removeChild(bulletElement)

                //Loop counter reduced for removed element
                i--;
          
                // Increase the score by a unit whenever the collision occurs
                score++;
                finalscore = score;
                scoreShow = score;

                //view the updated score
                const scoreElement = document.querySelector('.scoreView');
                scoreElement.textContent = "Score :"+ score;
              }
            
              //tracking the level -2 and add the collision conditon of second row of falling cans
             }else if (gameTrackCount === 2 || gameTrackCount === 3|| levelTwoEnter === true){
            // }else if (levelTwoEnter){
            
            //logic for collision check between the bullet and the cans which disapper by one hit
            if (
                canTopPosition + canHeight >= bulletTopPosition &&
                canTopPosition + canHeight <= guardFishTop &&
                canTopPosition <= bulletTopPosition && 
                bulletLeftPosition + i * canWidth >= canLeftPosition + i * canWidth &&
                bulletLeftPosition + i * canWidth < canLeftPosition + canWidth + i * canWidth
              ) {console.log('Bullet hit2!');

                //Remove the element from the array  of the surviving_cans
                  surviving_cans.splice(i, 1);

                //Remove the can and bullet from the screen
                  gameContainer.removeChild(object1);
                  gameContainer.removeChild(bulletElement);

                //Loop counter reduced for removed element
                  i--;
                
                  //increment of the scoe value in each collision
                  score++;
                  finalscore = score;
                  scoreShow = score;

                  //view the updated score
                  const scoreElement = document.querySelector('.scoreView');
                  scoreElement.textContent = 'Score :' + score;
                  strikeCount = 0;
                }
            }
    

            //for secret and magical cans

            //check condition for completion level -1 and show the game over updates
            if(finalscore >= 8 && gameTrackCount === 1){
            // if(finalscore === 8 || finalscore === 16 || finalscore  == 18){

                    console.log("game over")
                    
                        gameOver();

                    //keep track of the flow of the game
                    gameTrackCount += 1;

                    console.log(scoreShow)
                    console.log("track the flow-",gameTrackCount)
                        
                }

        }
                
            
                //track the flow of the game and the level - 2 in the game 
                if ((finalscore >= 8 && gameTrackCount == 2) ||  gameTrackCount == 3){

                // if ((finalscore >= 8 && gameTrackCount == 2) || (finalscore >= 8 && gameTrackCount == 4)){
                
                //apply the conditions for secret and magical cans with unknown number of counts for striking the bullet
                for (let i = 0; i < surviving_cans2.length; i++) {

                //tracking every elements of array of cans and detremining the position of each cans    
                const object2 = document.getElementById(surviving_cans2[i].id);
                const rect2 = object2.getBoundingClientRect();
                const plasticTopPosition = rect2.top;
                const plasticLeftPosition = rect2.left;
            
                //tracking the fired bullet and determinig the position of the bullets
                const bulletRect = bulletElement.getBoundingClientRect();
                const bulletTopPosition = bulletRect.top;
                const bulletLeftPosition = bulletRect.left;

                    // console.log("magical cans")
                    // console.log("plasticTopo", plasticLeftPosition, "plasticheight", plasticHeight, "bulletTopPos", bulletTopPosition );
                    // console.log("bulletLrft", bulletLeftPosition, "plasticWidth", plasticWidth, "plasticLeft", plasticLeftPosition)
                
                //collision logic for secret and magical cans
                if (
                  plasticTopPosition + plasticHeight >= bulletTopPosition &&
                  plasticTopPosition + plasticHeight <= guardFishTop &&
                  plasticTopPosition <= bulletTopPosition && 
                  bulletLeftPosition + i * plasticWidth >= plasticLeftPosition + i * plasticWidth &&
                  bulletLeftPosition + i * plasticWidth < plasticLeftPosition + plasticWidth + i * plasticWidth
                ) {
                  
                  //count the number of times, the bullet strikes the secret cans
                  strikeCount++;
                }

                //random number generation from 1 to 5
                randomStrikeCount = Math.floor(Math.random()*(5-1))+1;
                console.log(randomStrikeCount)
                
                //compare the number of times bullet strikes the secret cans and random number from 1-5 which keeps on changing in every instinct
                if (strikeCount === randomStirkeCount) {
                
                  //Remove the element from the array  of the surviving_cans
                  surviving_cans2.splice(i, 1);

                  //Remove the can and bullet from the screen
                  gameContainer.removeChild(object2);
                  gameContainer.removeChild(bulletElement);

                  //Loop counter reduced for removed element
                  i--; 
                    
                  // Increase the score by a unit whenever the collision occurs
                  score++;
                  finalscore = score;
                  scoreShow = score;

                  //view the updated score
                  const scoreElement = document.querySelector('.scoreView');
                  scoreElement.textContent = 'Score :' + score;
                  strikeCount = 0;
                }
              }
            }
        
              //check condition for completion level -2 and show the game over updates
              if(finalscore == 16 && levelTwoEnter && level === 2){


                // console.log("game over")

                //show the game over instruction 
                if(gameTrackCount === 1){
                    gameOver();
                }

                if(gameTrackCount === 2){
                gameTrackCount += 1;
                }

                //track if the game flow is in the level 2 and completion of the level 2 then show the game over instruction
                if(levelTwoEnter && scoreShow >= 16){
                    gameOver();
                }

                
                    
                // }else if(gameTrackCount === 3){
                //     startLevel3();
                // }
            }
                       
              
            }
            console.log(scoreShow)
            console.log("level-",gameTrackCount)    
           
          
                    

          function gameOver(){
            //disable the movement of the guard fish with the right and left arrow keys
            document.removeEventListener('keydown', controlMovement)

            //disable the control of the space bar to shoot the bullet
            document.removeEventListener('keydown', shoot)
    
            //hide the score view and level view
            scoreView.style.display = 'none';
            levelView.style.display = 'none';

            //display the game over screen
            gameOverScreen.style.display = 'block';

            //set the final score
            finalScoreView.innerHTML ="Final Score: " + score;

            

            //move the fish to the left side of the game container to restart or continue playing the game
            left = 0;
            fish.style.left = left + "px";

            if(level === 1 && score < 8){

                showInstruction1.style.display = 'block';
                continueplay.style.display = 'block';

            } else if (level === 1 && score ===8){

                showInstruction2.style.display = 'block';
                showInLevel2.style.display = 'block';

            } else if (level === 2 && score < 16){

                showInstruction1.style.display = 'block';
                continueplay.style.display = 'block';
                showInLevel2.style.display = 'none';
                showInstruction2.style.display = 'none';



            } else if (level === 2 && score === 16){
                showInstruction1.style.display = 'none';
                continueplay.style.display = 'none';
                showInLevel2.style.display = 'none';

                showInstruction2.style.display = 'block';
                showInLevel3.style.display = 'block';

            } else if (level === 3 && score < 16){
                showInstruction1.style.display = 'block';
                continueplay.style.display = 'block';

                showInLevel2.style.display = 'none';
                showInstruction2.style.display = 'none';
                showInLevel3.style.display = 'none';

            }


            
            
            


            //button with an event listner to restart or continue playing the game
            playAgainButton.addEventListener("click", playAgain);

            }

            if(scoreShow === 16 && level === 2){
                // levelTwoEnter = false;
                gameTrackCount = 4;
            // levelThreeEnter = true;
            }

              
        }
    
        
        

        

        function playAgain(){
            // gameOverScreen.classList.add("hide");
            scoreView.style.display = 'block';
            levelView.style.display = 'block';

            gameOverScreen.style.display = 'none';

            console.log('inside play again')
            

            if(gameTrackCount === 1 && scoreShow < 8){
                freshWater.classList.remove("hide");
                freshSky.classList.remove("hide");

                badWater.style.display = 'none';
                pollutedSky.style.display = 'none';
                console.log('level-1 again')
                startPlay();
            

            } else if (gameTrackCount === 2){
                //increase the level of game by 1 in the score is 8 for level 1, 16 for level 2 and 18 for level 3
                if(scoreShow === 8 || scoreShow === 16){
                level += 1;
                }
                startPlay();
                // if(scoreShow === 16 && level === 2){
                //     gameTrackCount = 4;
                // // levelThreeEnter = true;
                // }

                // if (gameTrackCount === 3 && finalscore >= 8 && levelTwoEnter){
                //     startLevel2();
                // }
                // startPlay();  

            // }else if(gameTrackCount === 3 && scoreShow <= 16 || gameTrackCount === 4 ){
            }else if(gameTrackCount === 3 && scoreShow <= 16){
                if(level === 2 && scoreShow === 16){
                    level = 3;
                }

                startPlay();
            }

        }

       

       

        
        init();
        
    })
  


   


   