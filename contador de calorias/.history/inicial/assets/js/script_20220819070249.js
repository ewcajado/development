const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
 event.preventDefault();

 const age = getInputNumberValue('age');
 const weight = getInputNumberValue('weight');
 const height = getInputNumberValue('height');

 console.log(age)
 console.log


};

function getInputNumberValue(id) {
 return Number(document.getElementById(id).value);

}

