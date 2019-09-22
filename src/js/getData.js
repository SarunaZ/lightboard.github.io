/**
 * @file
 */

import { storageData } from './storageData.js';
import createNode from './createNode.js';

const lightboard = document.querySelector('.lightboard');

const renderData = () => {
  let speciaList = []
 storageData.filter(item => {
   !item.specialist.includes(speciaList) ? specialist.push(item.specialist) : '';
  });
 console.log(speciaList);
  storageData.forEach(item => {
    const row = createNode("div", 'lightboard__row');
    const markup = `
      <p class="lightboard__number">${item.number}</p>
      <p class="lightboard__name">Vardas: ${item.name}</p>
      <p class="lightboard__specialist">Specialistas: ${item.specialist}</p>
    `;
    lightboard ? lightboard.appendChild(row) : '';
    row.innerHTML = markup
  });
}

localStorage.length !== 0 && lightboard ? renderData() :
 lightboard ? lightboard.innerText = "No data" : '';
