const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const audioJump = document.querySelector('.audioJump'); 
const gameOver = document.querySelector('.gameover');

const jump =() => 
{
    mario.classList.add('jump');
    
     audioJump.currentTime = 0.1;
     audioJump.volume = 0.1;
     audioJump.play();

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px","");
    
    console.log(marioPosition);
    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 85) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.src = "./images/game-over.png";
        mario.style.width = "78px";
        mario.style.margin = "43px"; 
        
        clearInterval(loop);
    }
}, 10);
document.addEventListener('keydown', jump);