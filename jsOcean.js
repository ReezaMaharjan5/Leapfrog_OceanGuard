document.addEventListener('DOMContentLoaded' , () => {

const gameContainer = document.querySelector(".gameContainer");
const landingMessage = document.querySelector(".messageCloud");
const startButton = document.querySelector(".startButton");
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

    
    let left = 0
    let top = 416
    let score = 0
    let bulletSpeed= 5
    let bulletTop = 430
    let isGameOver = false;
    let bulletLeft = 60
    // let objectTop = 0
    let width = 15
    let moveDirection = 1
    let moveCanId
    let movingCanRight = true
    // let bulletTop = 12
    document.addEventListener('keydown', controlMovement)
    document.addEventListener('keydown', shoot)
    
    
    for (let i = 0; i < 64; i++) {
        const square = document.createElement('div')
        grid.appendChild(square)

        // const plastic = document.createElement('div')
        // grid.appendChild(plastic)
      }
    //   grid.style.top = objectTop + "px"

    // //   if(objectTop== 400){
    // //   objectTop = 40
    // //   grid.style.top = objectTop + "px"
    // // }
    // moveObject();
    // function moveObject(){
    //     // if(objectTop== 400){
    //         objectTop = +80
    //         square.style.top = objectTop + "px"
    //     //   }      
    // }
    
    const squares = Array.from(document.querySelectorAll('.grid div'));

    // const plastic = Array.from(document.querySelectorAll('.grid div'));

    const objectCan = [
    0,1,2,3,4,5,
    8,9,10,11,12,13

    // 16,17,18,19,20,21,22
    ]

    // const objectPlastic = [
    // // 16,17,18,19,20,21,22,23
    // 33,34,35,36,37,38
    // ]

    function drawCan() {
    for (let i = 0; i < objectCan.length; i++) {
        squares[objectCan[i]].classList.add('pollutant');
    }
    }

    // function drawPlastic() {
    //     for (let i = 0; i < objectPlastic.length; i++) {
    //         squares[objectPlastic[i]].classList.add('pollutant2');
    //     }
    //     }
    
    function removeCan() {
        for (let i = 0; i < objectCan.length; i++) {
            squares[objectCan[i]].classList.remove('pollutant');
        }
        }

    drawCan();
    // drawPlastic();


    function moveCan(){
        const leftEdge = objectCan[0] % width === 0;
        const rightEdge = objectCan[objectCan.length-1] % width ===0;
        removeCan();

        for(let i = 0; i < objectCan.length; i++){
            objectCan[i] += moveDirection;
        }

        drawCan();
    }

    moveCanId = setInterval(moveCan, 600);

    

      
    


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


            // //move the pillars by specific distance in smooth way
            // function moveObstacle() {
            //     obstacleLeft -=2
            //     obstacle.style.left = obstacleLeft + 'px'
            //     topObstacle.style.left = obstacleLeft + 'px'

            //     if (obstacleLeft === -100) {
            //         clearInterval(timerId)
            //         gameDisplay.removeChild(obstacle)
            //         gameDisplay.removeChild(topObstacle)
            //     }
                // if




                // if (rightEdge && movingCanRight) {
                //     for (let i = 0; i < objectCan.length; i++) {
                //       objectCan[i] += width + 1
                //       direction = -1
                //       movingCanRight = false 
                //     }
                // }
        
                // if (leftEdge && !movingCanRight) {
                //     for (let i = 0; i < objectCan.length; i++) {
                //       objectCan[i] += width + 1
                //       direction = 1
                //       movingCanRight = true
                //     }
                // }
          
    








// function drawCan() {
//     for (let i = 0; i < objectCan.length; i++) {
//         squares[objectCan[i]].classList.add('pollutant');
//     }
//     }

    
//     function removeCan() {
//         for (let i = 1; i < objectCan.length; i++) {
//             squares[objectCan[i]].classList.remove('pollutant');
//         }
//         }

//     drawCan();
