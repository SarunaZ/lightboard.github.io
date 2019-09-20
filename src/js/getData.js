/**
 * @file
 */

import { storageData } from './storageData.js';
import createNode from './createNode.js';

const lightboard = document.querySelector('.lightboard');

const rederData = () => {
  storageData.forEach(item => {
    const row = createNode("div", 'lightboard__row');
    const markup = `
      <p class="lightboard__name">${item.number}</p>
      <p class="lightboard__name">${item.name}</p>
      <p class="lightboard__name">${item.specialist}</p>
    `;
    lightboard.appendChild(row);
    row.innerHTML = markup
  });
}

localStorage.length !== 0 ? rederData() : lightboard.innerText = "No data";