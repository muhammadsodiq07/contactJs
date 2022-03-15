let form = document.querySelector('#formOne');
let firstNameInput = document.querySelector("#inputName");
let phoneInput = document.querySelector("#inputPhone");
let caticInput = document.querySelector("#cat");
let tbody = document.querySelector("#tbody");
let all = document.querySelector('.allContact')
let friend = document.querySelector('.friendsContact')
let family = document.querySelector('.familyContact')
let najot = document.querySelector('.najotContact')

let firstNameOutput = document.querySelector("#firstName");
let phonePutput = document.querySelector("#phoneId");
let idOutput = document.querySelector("#id");
let caticOut = document.querySelector("#caticoriusId");
let idVal = 2;    


form.addEventListener('submit', (e) => {
  e.preventDefault();

  let firstNameVal = firstNameInput.value;
  let phoneVal = phoneInput.value;
  let catttVal = caticInput.value;

  let tar = document.createElement('tr');
  tar.innerHTML = `
  <th scope="row" id="id">${idVal}</th>
  <td id="firstName">${firstNameVal}</td>
  <td id="phoneId">
    <a class="phone" href="tel: +99890911-11-11">
        ${phoneVal}
    </a>
  </td>
  <td id="caticoriusId">${catttVal}</td>
   `
  tbody.appendChild(tar);


  firstNameInput.value = "";
  phoneInput.value = "";
  caticInput.value = "";
  idVal++;
});

