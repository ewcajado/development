const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
 event.preventDefault();

 const age = document.getElementById('age').ariaValueMax;

 console.log(age);

};

