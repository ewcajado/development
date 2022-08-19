const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
 event.preventDefault();

 const gender = getSelectedValue('gender')
 const age = getInputNumberValue('age');
 const weight = getInputNumberValue('weight');
 const height = getInputNumberValue('height');
 const activity_level = getSelectedValue('activity_level');

 const tmb = (
  gender === 'female'
  ? (655 + (9.6 * weight) + (1.8 * height) - (4.7 * age))
  : (66 + (13.7 * weight) + (5 * height) - (6.8 * age))
 );
 const maintenance = Math.round(tmb * Number(activity_level));
 const loseWeight = maintenance - 450;
 const gainWeight = maintenance + 450;

 const layout = `
 <h2>your result:</h2>

 <div class="result-content">
   <ul>
     <li>
       your basal metabolism is <strong>1606 kcal</strong>.
     </li>
     <li>
       to keep your weight you need to consume average <strong>1928 kcal</strong>.
     </li>
     <li>
       to loss weight you need to consume average <strong>1638 kcal</strong>.
     </li>
     <li>
       to gain weight you need to consume average <strong>2217 kcal</strong>.
     </li>
   </ul>
 </div>
 
 ${maintenance}
 `;
};

function getSelectedValue(id) {
 const select = document.getElementById(id);
 return select.options[select.selectedIndex].value;
}

function getInputNumberValue(id) {
 return Number(document.getElementById(id).value);
}

