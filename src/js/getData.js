/**
 * @file
 */

import { storageData } from './storageData.js';
import createNode from './createNode.js';

const lightboard = document.querySelector('.lightboard');

const renderData = () => {
  storageData.forEach(item => {
    const row = createNode("div", 'lightboard__row');
    const markup = `
      <p class="lightboard__number">${item.number}</p>
      <p class="lightboard__name">${item.name}</p>
      <p class="lightboard__specialist">${item.specialist}</p>
    `;
    lightboard ? lightboard.appendChild(row) : '';
    row.innerHTML = markup
  });
}

localStorage.length !== 0 ? renderData() : lightboard.innerText = "No data";
