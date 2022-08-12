let inputNewTask = document.querySelector('#inputNewTask');
let buttonAddTask = document.querySelector('#buttonAddTask');
let tasksList = document.querySelector('#tasksList');
let windowEdit = document.querySelector('#windowEdit');
let windowBackgroundEdit = document.querySelector('#windowBackgroundEdit');
let windowCloseEditButton = document.querySelector('#windowCloseEditButton');
let buttonRefreshTask = document.querySelector('#buttonRefreshTask');
let idTaskEdit = document.querySelector('#idTaskEdit');
let inputTaskEditName = document.querySelector('#inputTaskEditName');
/*const qtdIdsDisponiveis = Number.MAX_VALUE;*/


inputNewTask.addEventListener('keypress', (e) => {

    if(e.keyCode == 13) {
        let task = { 
            name: inputNewTask.value,
            id: generateId(),
        }
        addTask(task);
    }
});

windowCloseEditButton.addEventListener('click', (e) => {
    alternateWindowsEdit()
    
});

buttonAddTask.addEventListener('click', (e) => {
    
    let task = { 
        name: inputNewTask.value,
        id: generateId(),
    }
    addTask(task);
});

buttonRefreshTask.addEventListener('click', (e) => {
    e.preventDefault();
    
    let idTask = idTaskEdit.innerHTML.replace('#', '');

    let task = {
        name: inputTaskEditName.value,
        id: idTask
    }

    let currentTask = document.getElementById(''+idTask+'');

    let li = createTagLI(task);
    tasksList.replace

})

function generateId() {
    return Math.floor(Math.random() * 3000);
}

function addTask(task) {
    let li = createTagLI(task);
    tasksList.appendChild(li);
    inputNewTask.value = '';

}


function createTagLI(task) {

    let li = document.createElement('li');
    li.id = task.id;

    let span = document.createElement('span');
    span.classList.add('textTask');
    span.innerHTML = task.name;

    let div = document.createElement('div');

    let buttonEdit = document.createElement('button');
    buttonEdit.classList.add('actionButton');
    buttonEdit.innerHTML = '<i class="fa fa-pencil"></i>';
    buttonEdit.setAttribute('onclick', 'edit(' + task.id+')');

    let buttonRemove = document.createElement('button');
    buttonRemove.classList.add('actionButton');
    buttonRemove.innerHTML = '<i class="fa fa-trash"></i>';
    buttonRemove.setAttribute('onclick', 'remove(' + task.id+')');


    div.appendChild(buttonEdit);
    div.appendChild(buttonRemove);

    li.appendChild(span);
    li.appendChild(div);
    
    return li;

}

function edit(idTask){
    let li = document.getElementById(''+idTask+'');
    if(li) {
        idTaskEdit.innerHTML = '#' + idTask;
        inputTaskEditName.value = li.innerText;
        alternateWindowsEdit();
    } else {
        alert('HTML element is not found!');
    }
}


function remove(idTask){
    let confirm = window.confirm('Are you sure you want to delete this task?');
    if(confirm) {
        let li = document.getElementById(''+idTask+'');
        if(li) {
            tasksList.removeChild(li);
        } else  {
            alert('HTML element is not found!');
    }
}
}

function alternateWindowsEdit(){
    windowEdit.classList.toggle('open');
    windowBackgroundEdit.classList.toggle('open');

}