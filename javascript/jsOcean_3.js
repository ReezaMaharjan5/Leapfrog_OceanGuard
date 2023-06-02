document.addEventListener('DOMContentLoaded' , () => {

    const gameContainer = document.querySelector(".gameContainer");
    const landingMessage = document.querySelector(".messageCloud");
    const startButton = document.querySelector(".startButton");
    const freshWater = document.querySelector(".oceanWater")
    const badWater = document.querySelector(".badWater")
    const freshSky = document.querySelector(".skySpace")
    const pollutedSky = document.querySelector(".pollutedSky")

    const can = document.querySelector(".canMove1");

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


       
        // let bulletTop = 12
        document.addEventListener('keydown', controlMovement)
        document.addEventListener('keydown', shoot)

            // function objectCan(){
            //     let canLeft = 20;
            //     // let canBottom = 400
            //     const can = document.createElement('div');
            //     can.classList.add('canMove1');
            //     gameContainer.appendChild(can);

            //     can.style.left = canLeft + 'px';
            //     can.style.top = canTop + 'px'

            //     function moveCan(){
            //         console.log(100)

            //         canTop += 2
            //         can.style.top = canTop + 'px'
            
            //         if (canTop === 590){
            //             clearInterval(timerId)
            //             gameContainer.removeChild(can)
            //         }

            //          collision();

            //     }
            //      let timerId = setInterval(moveCan, 50);
                
            //      function collision(){    
            //         if(canTop + 100 >= bulletTop && bulletFire == true){
            //             // console.log("can",canTop)
            //             // console.log("bullet",bulletTop)
            //             console.log("over over")
                        
            //             gameContainer.removeChild(can)
            //             gameContainer.removeChild(bullet)
            //         }
            //      }
            // }
            // objectCan();

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

                collision();
               
                         
                }
                 let timerId = setInterval(moveCan, 10);

                function collision(){  


                    // for(let i =0; i<6;i++){
                    // surviving_cans = can
                    const rect1 = can.getBoundingClientRect();
                    const bottomPositionCan = rect1.bottom;
                    console.log(bottomPositionCan)

                    if(bottomPositionCan >= bulletTop){
                        console.log("over over")
                        gameContainer.removeChild(can)
                        console.log(can.id)
                    

                    }
                }
                // function collision(){  
                    
                //         if(canTop + 100 >= bulletTop && bulletFire == true){
                //             console.log("can",canTop)
                //             console.log("bullet",bulletTop)
                //             console.log("over over")
                //             gameContainer.removeChild(can)
                //             gameContainer.removeChild(bullet)
                //         }

                    return {
            id:Math.random()*2,
            element: can
        };
    }


    let surviving_cans  =[];
    for(let i =0; i<6;i++){
        const object_can =  objectCan(i*70);
        surviving_cans.push(object_can);

    //     const object1 = document.getElementById(surviving_cans[0]);
    //     const rect1 = object1.getBoundingClientRect();
      
    //    console.log(rect1)
           const canPosition = object_can
            // const rect1 = canPosition.getBoundingClientRect();
       console.log(canPosition)


    }
    
    console.log('individual can id:',surviving_cans)

    // let topPosition = 40; // Initialize with a very low value

   
    // for (let i = 0; i < surviving_cans.length; i++) {
    //     const object1 = document.getElementById(surviving_cans[1]);
    //     const rect1 = object1.getBoundingClientRect();
      
    //    console.log(rect1)
    //   }
      
      
      
      
      
      
      


// for (let i = 0; i < surviving_cans.length; i++) {
//   const element = document.getElementById(surviving_cans[i]); // Assuming the array contains element IDs
//   const bullet_element = document.getElementsByClassName('bullet')

//     const rect1 = element.getBoundingClientRect();
//     const rect2 = bullet.getBoundingClientRect();
//     const elementCanTop = rect1.top;
//     const elementBulletTop =rect2.top;

//     // if (elementTop > topPosition) {
//     //   topPosition = elementTop;
//     // }
//     console.log("Top position:", elementBulletTop);
//     console.log("Top position:", elementCanTop);

// }




    // for(let i =0; i<surviving_cans.length; i++){
    //     const  element = surviving_cans[i];

    // }
    
    // // console.log(surviving_cans[i])
    // // const rect = element.getBoundingClientRect();
    // // console.log(rect.top)
    
//     let topPosition = -Infinity; // Initialize with a very low value

// for (let i = 0; i < surviving_cans.length; i++) {
//   const element = surviving_cans[i];
//   const rect = element.getBoundingClientRect();
//   const elementTop = rect.top;

//   if (elementTop > topPosition) {
//     topPosition = elementTop;
//   }
// }

// console.log("Top position:", topPosition);



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
            
    
                // bulletTop = 430
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
    
                    if(bulletTop === 200){
                        clearInterval(timerId)
                        gameContainer.removeChild(bullet)
                    } 

                    // function collision(){
                        
    
    
                    //     if(canTop + 80 >= bulletTop){
                    //         // console.log("can",canTop)
                    //         // console.log("bullet",bulletTop)
                    //         console.log("over over")
                            
                    //         gameContainer.removeChild(bullet)
    
                    //     }
                    //  }
                    //  collision();
                    
    
                }
                let timerId = setInterval(moveBullet, bulletSpeed)
                bulletFire = true;   

                // setTimeout(showBullet, 2000)  
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
    
    
               
    
    
    
        
    
    
    
    
    
