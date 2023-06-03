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
        let canTop = 0
        let bulletFire = false


       
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
                    // console.log(100)

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
               
                }

                // collision();
               
                         
                }
                 let timerId = setInterval(moveCan, 20);

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
                let canId = Math.random()*2;
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


   
    // for (let i = 0; i < surviving_cans.length; i++) {

    //     const object1 = document.getElementById((surviving_cans[i])?.id);

    //     const rect1 = object1.getBoundingClientRect();

        
    //     console.log("one",rect1)
    //     console.log("two",bulletTop)
    //     // collision();

    //   }

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
                    
                    collision();

                }
                let timerId = setInterval(moveBullet, bulletSpeed)
                // setTimeout(showBullet, 2000)  
                bulletFire = false;

                

                }
    
                showBullet();
            }
        }

        function collision(){

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
            
               
        
        
        for (let i = 0; i < surviving_cans.length; i++) {

            const object1 = document.getElementById((surviving_cans[i])?.id);
            const rect1 = object1.getBoundingClientRect();
            const canTopPosition = rect1.top;
            // surviving_cans.splice(i, 1);

            // surviving_cans[i]?.id.remove();
            // const a=surviving_cans.splice(i, 1);
            // delete surviving_cans[i];
            // surviving_cans.pop(0);
            // delete surviving_cans[0];


            if(canTopPosition + 80 >= bulletTop){
                console.log("shoot") 
                // surviving_cans.pop(0);
                surviving_cans.splice(i, 1);

            }
    
            
            console.log("one",canTopPosition)
            console.log("two",bulletTop)
            // collision();
    
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
    
    
               
    
    
    
        
    
    
    
    
    
