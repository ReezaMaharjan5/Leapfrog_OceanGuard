document.addEventListener('DOMContentLoaded' , () => {

    const gameContainer = document.querySelector(".gameContainer");
    const landingMessage = document.querySelector(".messageCloud");
    const startButton = document.querySelector(".startButton");
    const freshWater = document.querySelector(".oceanWater")
    const badWater = document.querySelector(".badWater")
    const freshSky = document.querySelector(".skySpace")
    const pollutedSky = document.querySelector(".pollutedSky")
    const fish = document.querySelector(".guradFish");
    const scoreView = document.querySelector(".scoreView");
    const bullet = document.querySelector(".bullet");
    const grid = document.querySelector(".grid")
    const square = document.createElement('div')
    const finalscore =  document.querySelector(".finalScoreView");
    const gameOverScreen = document.querySelector(".gameOverScreen");
    const finalScoreView = document.querySelector(".finalScoreView")
    const playAgainButton = document.querySelector(".playAgainButton");
    
    
    var moveSpace = 10;
    var presentLevel = 1;
    let scoreShow = 0;


    
    function init(){
        startButton.addEventListener("click", startPlay);
    }



    function startPlay(){
        // console.log(100)
        // var presentLevel = 1;

        landingMessage.classList.add("hide");
        scoreView.style.display = 'block';
        gameOverScreen.classList.add("hide");
    
        // badWater.style.display = 'block';

     
        
        let left = 0
        let top = 416
        let score = 0
        let bulletSpeed = 3
        let canSpeed = 50
        let bulletTop = 430
        let isGameOver = false;
        let bulletLeft = 60
        let canTop = 0
        let bulletFire = false
        let guardFishTop = 420;
        let bulletElement;
        let finalscore;


       
        document.addEventListener('keydown', controlMovement)
        document.addEventListener('keydown', shoot)

            

            function objectCan(canLeftParam){
                let canLeft = canLeftParam || 0;
                let canTop = 0
                const can = document.createElement('div');
                can.classList.add('canMove1');
                gameContainer.appendChild(can);

                can.style.left = canLeft + 'px';
                can.style.top = canTop + 'px'


                function moveCan(){

                    canTop += 2
                    can.style.top = canTop + 'px'
 
                if (canTop === 590){
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
        const object_can =  objectCan(i*70);
        surviving_cans.push(object_can);
        const canPosition = object_can
        console.log(canPosition)
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
                    bulletLeft = left + 75
                    bullet.style.left = bulletLeft + 'px'  
    
                    if(bulletTop === 30){
                        clearInterval(timerId)
                        gameContainer.removeChild(bullet)
                    } 
                    bulletElement = bullet;
                    collision();

                }
                let timerId = setInterval(moveBullet, bulletSpeed)
                // setTimeout(showBullet, 2000)  
                bulletFire = false;

                

                }
    
                showBullet();
            }
        }

        collision();

        
        function collision() {
            for (let i = 0; i < surviving_cans.length; i++) {
              const object1 = document.getElementById(surviving_cans[i]?.id);
              const rect1 = object1.getBoundingClientRect();
              const canTopPosition = rect1.top;
              const canLeftPosition = rect1.left;
              
            //   console.log("bullet left",bulletLeft)
              console.log("CAN left",canLeftPosition)

            //   bulletFix = bulletLeft + 75
              const bulletRect = bulletElement.getBoundingClientRect(); // Access the bullet element's bounding client rect
              const bulletTopPosition = bulletRect.top;
              const bulletLeftPosition = bulletRect.left;
              
              console.log("bullet left",bulletLeftPosition)

              if (
                canTopPosition + 80 >= bulletTopPosition 
                && canTopPosition + 80 <= guardFishTop
                && bulletLeftPosition + (i * 70)>= canLeftPosition + i * 70
                && bulletLeftPosition + (i * 70)< canLeftPosition + 70 + i * 70
            


              ) {
                console.log("Bullet hit!");
          
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
                
                
                if(finalscore == 8){
                    console.log("game over")
                    gameOver();
                   

                }
              }
              
            }
           
          }

          function gameOver(){
            document.removeEventListener('keydown', controlMovement)
            document.removeEventListener('keydown', shoot)
       
            
            
            
            scoreView.style.display = 'none';
            // finalScoreView.textContent = "Final Score: " + score; // Set the final score
            finalScoreView.innerHTML ="Final Score: " + score;
            // gameOverScreen.classList.remove("hide"); // Display the game over screen
            gameOverScreen.style.display = 'block';

            playAgainButton.addEventListener("click", playAgain);

            }

              
        }
        
        
        function playAgain(){
            // gameOverScreen.classList.add("hide");
            scoreView.style.display = 'block';
            gameOverScreen.style.display = 'none';

            console.log('over once')
            console.log(scoreShow)
            console.log(presentLevel)

            if(presentLevel === 1 && scoreShow <= 8){
                freshWater.classList.remove("hide");
                freshSky.classList.remove("hide");

                badWater.style.display = 'none';
                pollutedSky.style.display = 'none';
                startPlay();
                console.log('level-1 again')
            

            } else if (presentLevel === 1 && scoreShow === 8){
                
            
                
                
                startLevel2();
                // startPlay();  

            }else if(presentLevel === 2 && scoreShow <= 16){
                startLevel3();
            }  
        }

       

       



    init();
    
    })

   


   