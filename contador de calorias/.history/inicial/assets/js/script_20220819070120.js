const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
 event.preventDefault();

 const age = getInputNumberValue('age');

 console.log(age);
 console.log(typeof age);

};

function getInputNumberValue(id) {
 return Number(document.getElementById(id).value);

}

