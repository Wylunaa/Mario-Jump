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

const loop = setInterval(() =>{

    const pipePosition = pipe.offsetLeft;
    
    if (pipePosition <= 120) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        gameOver.currentTime = 0.1;
        gameOver.volume = 0.2;
        gameOver.play();
    }
}, 10);
document.addEventListener('keydown', jump);