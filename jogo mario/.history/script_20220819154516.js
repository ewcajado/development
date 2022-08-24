let mario = document.querySelector ('.mario');
let pipe = document.querySelector('.pipe');

let jump = () => {
 mario.classList.add('jump');

 setTimeout(( => {
  mario.classList.remove('jump');
 }, 500);)
}