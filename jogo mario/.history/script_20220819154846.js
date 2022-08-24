let mario = document.querySelector ('.mario');
let pipe = document.querySelector('.pipe');

let jump = () => {
 mario.classList.add('jump');

 setTimeout(() => {
  mario.classList.remove('jump');
 }, 500);
}

let loop = setInterval(() => {
 let pipePosition = pipe.offsetLeft;
 let marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ' ');

 if (pipePosition <=120 && pipePosition > 0 && marioPosition < 80) {
    pipePosition.style.animation = 'none';
    
 })