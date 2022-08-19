const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
 event.preventDefault();

 const age = document.getElementById('age');

 console.log(age);

};

function getInputNumberValue(id) {
 return document.getElementById(id).value;

}

