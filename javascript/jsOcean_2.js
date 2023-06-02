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
    
    
    var moveSpace = 10;
    
    function init(){
        startButton.addEventListener("click", startPlay);
    }
    function startPlay(){
        // console.log(100)
        landingMessage.classList.add("hide");
        scoreView.style.display = 'block';
        // badWater.style.display = 'block';

    
        
        let left = 0
        let top = 416
        let score = 0
        let bulletSpeed= 5
        let bulletTop = 430
        let isGameOver = false;
        let bulletLeft = 60
        let canWidth = 70
        let bulletFire = true;
        let shootcan= false;
        let shootcan2 = false;
        // let bulletTop = 12
        document.addEventListener('keydown', controlMovement)
        document.addEventListener('keydown', shoot)

            function objectCan(){
                let canLeft = 0;
                let canTop = 0;
                let canTop2 = 0;
                const can = document.createElement('div');
                can.classList.add('canMove1');
                gameContainer.appendChild(can);

                const can2 = document.createElement('div');


                can2.classList.add('canMove1');
                gameContainer.appendChild(can2);

                can.style.left = canLeft + 'px';
                can.style.top = canTop + 'px'

                let canLeft2 = 70 
                can2.style.left = canLeft2 +  'px';
                can2.style.top = canTop2 + 'px'

                function moveCan(){
                    console.log(100)

                    canTop += 2
                    canTop2 +=2

                    can.style.top = canTop + 'px'

                    can2.style.top = canTop2 + 'px'
                    console.log(bulletLeft)

                    if (canTop === 590 || canTop2 === 590){
                        clearInterval(timerId)
                        badWater.style.display = 'block';
                        pollutedSky.style.display = 'block';
    
                        freshWater.classList.add("hide");
                        freshSky.classList.add("hide");
                        if(!shootcan){
                        gameContainer.removeChild(can)
                        }
                        if(!shootcan2){
                        gameContainer.removeChild(can2)
                        }
                        // if(!shootcan3){
                        //     gameContainer.removeChild(can3)
                        // }
                        // if(!shootcan4){
                        //     gameContainer.removeChild(can4)
                        // }
                        // if(!shootcan5){
                        //     gameContainer.removeChild(can5)
                        // }
                        // if(!shootcan6){
                        //     gameContainer.removeChild(can6)
                        // }
    
                        // gameContainer.removeChild(freshWater)
                       
                   
                    }

                    collision();

                }
                 let timerId = setInterval(moveCan, 40);
                
                 function collision(){    
                    // if(canTop + 100 >= bulletTop && bulletFire == true){
                    if(canTop + 80 >= bulletTop && bulletLeft >= canLeft && bulletLeft < 77){

                        // console.log("can",canTop)
                        // console.log("bullet",bulletTop)
                        console.log("over over")
                        
                        gameContainer.removeChild(can)
                        shootcan=true;
                        score++;
                        // gameContainer.removeChild(bullet)
                    } 
                    if (canTop2 + 80 >= bulletTop && bulletLeft >= 77 && bulletLeft < 156){


                        // console.log("can",canTop)
                        // console.log("bullet",bulletTop)
                        console.log("over over")
                        gameContainer.removeChild(can2)
                        shootcan2=true;
                        score++;
                        // gameContainer.removeChild(bullet)
                    }
                    const scoreElement = document.querySelector('.scoreView');
                    scoreElement.textContent = "Score :"+ score;
                      
                 }

            }
            objectCan();

//             function objectCan(canLeftParam){
//                 let canLeft = canLeftParam || 0;
//                 let canTop = 0
//                 const can = document.createElement('div');
//                 can.classList.add('canMove1');
//                 gameContainer.appendChild(can);

//                 can.style.left = canLeft + 'px';
//                 can.style.top = canTop + 'px'


//                 function moveCan(){
//                     console.log(100)

//                     canTop += 2
//                     can.style.top = canTop + 'px'

//                 if (canTop === 590){
//                     clearInterval(timerId)
//                     gameContainer.removeChild(can)

//                     gameContainer.removeChild(freshWater)
//                     badWater.style.display = 'block';
//                     pollutedSky.style.display = 'block';

//                     freshWater.classList.add("hide");
//                     freshSky.classList.add("hide");
//                     gameOver();
//                 }

//                 function gameOver(){
//                     console.log('game over')
//                 }            
//                 }
//                  let timerId = setInterval(moveCan, 50);
//         return {
//         id:Math.random()*10,
//             element: can
//         };
//     }


// let surviving_cans  =[];
//     for(let i =0; i<6;i++){
//         const object_can =  objectCan(i*70);
//         surviving_cans.push(object_can);
//     }

    // console.log('asd <<',surviving_cans)
    
        function controlMovement(e) {
            if (e.keyCode === 37 && left > -1) {
                left -=20
                fish.style.left = left + "px";
            }
    
            if (e.keyCode === 39 && left < 464){
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
    
                }
                let timerId = setInterval(moveBullet, bulletSpeed)
                // setTimeout(showBullet, 2000)  
                bulletFire = false;
                }
    
                showBullet();
    
    
              
    
                // moveBullet();
            }
        }
    
     
    }
    
    init();
    
    })
    
    
    
                // bullet.style.left = player.x + 20 + "px";
                
                // if(top=== -415){
    
    
                // if (!isGameOver) {
                //         bullet.classList.add('bullet');
                //     }
    
                // gameContainer.appendChild(bullet);
    
                // for(let i = 0; i <= 40 ; i++){
                //     console.log(100);
                   
                //     // bullet.style.display = 'block';
                //     bullet = document.createElement("div");
                //      bullet.classList.add("bullet");
                //     //  gameContainer.classList.appendChild(bullet);
                //      top-=10;
    
                //      bullet.style.top = top + "px";
                //      console.log(top)
                //     // gameContainer.appendChild(bullet);
    
    
                // }
    
                // if (!isGameOver) {
                //     obstacle.classList.add('obstacle')
                //     topObstacle.classList.add('topObstacle')
                // }
                // gameDisplay.appendChild(obstacle)
                // gameDisplay.appendChild(topObstacle)
                // obstacle.style.left = obstacleLeft + 'px'
                // topObstacle.style.left = obstacleLeft + 'px'
                // obstacle.style.bottom = obstacleBottom + 'px'
                // topObstacle.style.bottom = obstacleBottom + gap + 'px'
    
    
               
    
    
    
        
    
    
    
    
    
