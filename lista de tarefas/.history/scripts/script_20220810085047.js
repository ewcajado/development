let inputNewTask = document.querySelector('#inputNewTask');
let buttonAddTask = document.querySelector('#buttonAddTask');
let taskList = document.querySelector('#tasksList');

inputNewTask.addEventListener('keypress', (e) => {

    if(e.keyCode == 13){
        let task = { 
            name: inputNewTask.value,
            id: generateId(),
    
        }
        // TODO:: Add HTML task
    }
});

buttonAddTask.addEventListener('click', (e) => {
    let task = { 
        name: inputNewTask.value,
        id: generateId(),
    }
    // TODO:: Add HTML task

});

function generateId() {
    return Math.floor(Math.random() * 3000 );
}

function addTask(task) {

}


function createTagLI