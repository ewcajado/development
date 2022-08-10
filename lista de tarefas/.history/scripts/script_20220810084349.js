let inputNewTask = document.querySelector('#inputNewTask');
let buttonAddTask = document.querySelector('#buttonAddTask');
let taskList = document.querySelector('#tasksList');

inputNewTask.addEventListener('keypress', (e) => {

    if(e.keyCode == 13){
        let task = { 
            name: inputNewTask.value,
            id: '',
    
        }
    }
});

function geraId()