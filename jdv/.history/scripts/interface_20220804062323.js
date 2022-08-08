document.addEventListener('DOMContentLoaded',()=>{

    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=> {
        square.addEventListener('click', handleClick);
    })
})

function handleClick(event) {

    console.log(event.target);

    let square = event.target;
    let position = square.id;

    handleMove(position);
    updateSquares();


}

function uptadeSquares(){

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) =>{
        
        let symbol = board

    })
}