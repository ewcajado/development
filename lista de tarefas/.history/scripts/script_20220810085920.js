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

    let li = createTagLI(task);
    taskList.appendChild(li);

}


function createTagLI(task){

    let li = document.createElement('li');

    let span = document.createElement('span');
    span.classList.add('textTask')
    span.innerHTML = task.name;

    let div = document.createElement('div');

    let buttonEdit = document.createElement('button');
    buttonEdit.classList.add('actionButton')
    buttonEdit.innerHTML = '<i class="fa fa-pencil"></i>'

    let buttonRemove = document.createElement('button');
    buttonRemove.classList.add('actionButton')
    buttonRemove.innerHTML = '<i class="fa fa-trash"></i>'

    div.appendChild(buttonEdit);
    div.appendChild(buttonRemove);



}