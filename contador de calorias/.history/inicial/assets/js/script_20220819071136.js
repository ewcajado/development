const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
 event.preventDefault();

 const gender = getSelectedValue('gender')
 const age = getInputNumberValue('age');
 const weight = getInputNumberValue('weight');
 const height = getInputNumberValue('height');
 const activity_level = getSelectedValue('activity_level');

 const tmb = ();
};

function getSelectedValue(id) {
 const select = document.getElementById(id);
 return select.options[select.selectedIndex].value;
}

function getInputNumberValue(id) {
 return Number(document.getElementById(id).value);
}

