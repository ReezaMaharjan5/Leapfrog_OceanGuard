let bulletTop;

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
        bulletFire = false;

        

        }

        showBullet();
    }

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
}