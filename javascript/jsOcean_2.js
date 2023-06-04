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
    const levelTwoButton = document.querySelector(".levelTwoButton");
    
    
    var moveSpace = 10;
    
    function init(){
        startButton.addEventListener("click", startPlay);
        // levelTwoButton.addEventListener("click", levelTwoButton);
    }



    function startPlay(){
        // console.log(100)
        landingMessage.classList.add("hide");
        scoreView.style.display = 'block';
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

                // function collision(){  


                //     // for(let i =0; i<6;i++){
                //     // surviving_cans = can
                //     const rect1 = can.getBoundingClientRect();
                //     const bottomPositionCan = rect1.bottom;
                //     console.log(bottomPositionCan)

                //     if(bottomPositionCan >= bulletTop){
                //         console.log("over over")
                //         gameContainer.removeChild(can)
                //         console.log(can.id)
                    

                //     }
                // }
                // function collision(){  
                    
                //         if(canTop + 100 >= bulletTop && bulletFire == true){
                //             console.log("can",canTop)
                //             console.log("bullet",bulletTop)
                //             console.log("over over")
                //             gameContainer.removeChild(can)
                //             gameContainer.removeChild(bullet)
                //         }
                //     }
                // let canId = Math.random()*2;
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
    
            if (e.keyCode === 39 && left < 480){
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
                const scoreElement = document.querySelector('.scoreView');
                scoreElement.textContent = "Score :"+ score;
                
                
                if(finalscore == 8){
                    console.log(score)
                    console.log("game over")
                    gameOver();
                   

                }
              }
              
            }
           
          }

          function gameOver(){
            document.removeEventListener('keydown', controlMovement)
            document.removeEventListener('keydown', shoot)
            // finalscore.style.display = 'block';
            finalScoreView.innerHTML =
            "Game Over!!" +
            "<br>" +
            "Final Score: " + score +
            "<br>" +
            "<b>Level 2 unlocked<b>" +
            "<br>" +
            "<button>Play Again</button>";
            
            
            scoreView.style.display = 'none';
            // finalScoreView.textContent = "Final Score: " + score; // Set the final score
            // gameOverScreen.classList.remove("hide"); // Display the game over screen
            gameOverScreen.style.display = 'block';
            }

              
            mainContainer.appendChild(scorePlaceHolder);
    }





    init();
    
    })

    function levelTwoButton(){
        // gameOverScreen.classList.add("hide");

  // Call the startPlay function to start the game again
        startPlay();
    }

    //     function collision(){

            
               
        
        
    //     for (let i = 0; i < surviving_cans.length; i++) {

    //         const object1 = document.getElementById((surviving_cans[i])?.id);
    //         const rect1 = object1.getBoundingClientRect();
    //         const canTopPosition = rect1.top;
    //         const canLeftPosition = rect1.left;
    //         console.log("position all index[",i,"]",rect1)

    //         // surviving_cans.splice(i, 1);

    //         // surviving_cans[i]?.id.remove();
    //         // const a=surviving_cans.splice(i, 1);
    //         // delete surviving_cans[i];
    //         // surviving_cans.pop(0);
    //         // delete surviving_cans[0];

            
    //         console.log("bullet top",bulletTop)

    //         console.log("bullet left",bulletLeft)
    //         console.log(score)



    //         // if(canTopPosition + 80 >= bulletTop && bulletLeft >= 0 + (i * 70) && bulletLeft < 70 + (i * 70)){
    //         // if(canTopPosition + 80 >= bulletTop && bulletLeft + 75 >= 149 + (i * 70) && bulletLeft + 149 < 219 + (i * 70)){

    //         if(canTopPosition + 80 >= bulletTop && bulletLeft + 75 >= canLeftPosition + (i * 70)){

    //              console.log("bullet left",bulletLeft + 75)
    //              console.log("left position index[",i,"]",canLeftPosition)

    //             console.log("shoot") 
    //             // shoot++;
    //             score++;
    //             // surviving_cans.pop(0);
    //             // surviving_cans.slice(index-1, 1);
    //             // surviving_cans[i].remove();
    //         }

    //     }
    // }

    // console.log('other id:',surviving_cans)
    // // console.log()
    //         console.log("one",canTopPosition)
    //         console.log("two",bulletTop)
    //         // collision();
    
    //       }
        // }
     

        // for (let i = 0; i < surviving_cans.length; i++) {

            //     const object1 = document.getElementById((surviving_cans[i])?.id);
            //     const rect1 = object1.getBoundingClientRect();
            //     const canTopPosition = rect1.top;
            //     const canxPosition = rect1.x;
                
            // }
            // for (let i = 0; i < surviving_cans.length; i++) {
            //     const object1 = document.getElementById(surviving_cans[i]?.id);
            //     const rect1 = object1.getBoundingClientRect();
            //     const canTopPosition = rect1.top;
            //     const canxPosition = rect1.x;
                
            //     if (i==1) {
            //       // Delete the element at index i from the array
            //     //   surviving_cans.splice(i, 1);
                  
            //       // Update the loop counter to account for the removed element
            //       i--;
            //     }
            //   }
            
    
    
    
    
    
    
               
    
    
    
        
    
    
    
    
    
