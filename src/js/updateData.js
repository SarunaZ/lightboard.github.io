/**
 * @file Functionality for saving new client data for the entire site at admin.html page
 */

import {
  storageData
} from './storageData.js';
import createNode from './createNode.js';

let newStorageData = storageData;
const newClientName = document.querySelector('.client--admin');
const newSpecialisttName = document.querySelector('.specialist--admin');
const updateForm = document.querySelector('.admin__form');
const currentNumber = [0];

// Generating a client number (last clients number + 1)
const getNumber = () => {
  newStorageData.filter(item => currentNumber.push(item.number));
  currentNumber.sort();
  let clientNumber = ++currentNumber[currentNumber.length - 1];
  return clientNumber;
}

// Rendering confirmation for successful data save
const renderConfirmation = () => {
  const markup = `
      <p class="admin__confirmation-text"> Klientas įrašytas </p>
  `;
  const confirmationNode = createNode('div', 'admin__warning');
  updateForm.appendChild(confirmationNode);
  confirmationNode.innerHTML = markup;
}

// Validation for input fields, so that user would only input words without any restricted charecters (minimising possibility for vulnerabilities)
const validation = (e) => {
  e.preventDefault();
  const regExp = new RegExp("[a-zA-Z\džšėūč]+$")

  if (newClientName.value.match(regExp) && newSpecialisttName.value.match(regExp)) {
    updateData();
  } else {
    document.write('Prasome ivesti tinkamus simbolius. Tuoj galesite meginti dar karta')
    setTimeout(() => {
      location.reload();
    }, 3000);
  }
}

// Saving the clients info by creating a new list to save to the localstorage
const updateData = () => {
  const clientNumber = getNumber();
  let newList = [...newStorageData,
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
  setTimeout(() => {
    location.reload();
  }, 1500);
}

// On submit the for initialises the validation funcion, update funcion only starts if conditions are met
updateForm ? updateForm.addEventListener('submit', validation) : '';