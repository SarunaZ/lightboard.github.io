import { storageData } from './storageData.js';
import createNode from './createNode.js';

let newStorageData = storageData;
const adminNode = document.querySelector('.admin');
const newClientName = document.querySelector('.client--admin');
const newSpecialisttName = document.querySelector('.specialist--admin');
const updateForm = document.querySelector('.admin__form');
const currentNumber = [0];
const getNumber = () => {
  newStorageData.filter(item => currentNumber.push(item.number));
  currentNumber.sort();
  let clientNumber = ++currentNumber[currentNumber.length - 1];
  return clientNumber;
}

const renderConfirmation = () => {
  const markup = `
      <p class="admin__confirmation-text"> Klientas irasytas </p>
  `;
  const confirmationNode = createNode('div', 'admin__warning');
  adminNode.appendChild(confirmationNode);
  confirmationNode.innerHTML = markup;
}

const validation = (e) => {
  e.preventDefault();
  const regExp = new RegExp("[a-zA-Z]+$")

  if (newClientName.value.match(regExp) && newSpecialisttName.value.match(regExp)) {
    updateData();
  } else {
    document.write('Prasome ivesti tinkamus simbolius. Tuoj galesite meginti dar karta')
    setTimeout(() => {location.reload();}, 3000);
  }
}

const updateData = () => {
  const clientNumber = getNumber();
  let newList =
    [...newStorageData,
    {
      "name": newClientName.value,
      "specialist": newSpecialisttName.value,
      "number": `${clientNumber}`
    }
    ];
  localStorage.setItem('clients', JSON.stringify({
    clients: [...newList]
  }));
  newStorageData = JSON.parse(localStorage.getItem('clients')).clients;
  updateForm.reset();
  renderConfirmation();
}

updateForm.addEventListener('submit', validation);

