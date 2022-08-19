const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
 event.preventDefault();

 const gender = getSelectedValue('gender')
 const age = getInputNumberValue('age');
 const weight = getInputNumberValue('weight');
 const height = getInputNumberValue('height');

 console.log)
 console.log(age)
 console.log(weight)
 console.log(height)

};

function getSelectedValue(id) {
 const select = document.getElementById(id);
 return select.options[select.selectedIndex].value;

 select.options;
 select.selectedIndex;

}

function getInputNumberValue(id) {
 return Number(document.getElementById(id).value);

}

