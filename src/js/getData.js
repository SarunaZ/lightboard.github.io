/**
 * @file
 */

import {
  storageData
} from './storageData.js';
import createNode from './createNode.js';
const lightboard = document.querySelector('.lightboard');
let current = '';
let collumn = '';

const renderData = () => {
  let sorted = storageData.sort((a, b) => {
    if (a.specialist > b.specialist) {
      return 1
    } else if (a.specialist < b.specialist) {
      return -1
    } else {
      if (a.number > b.number) {
        return 1
      } else {
        return -1
      }
    }
  })

  sorted.forEach(item => {
    if (item.specialist !== current) {
      collumn = createNode("div", "lightboard__data");
      lightboard ? lightboard.appendChild(collumn) : '';
      current = item.specialist;
      const markup = `
      <p class="lightboard__number">${item.number}</p>
      <p class="lightboard__name">Vardas: ${item.name}</p>
      <p class="lightboard__specialist">Specialistas: ${item.specialist}</p>
    `;
      collumn.innerHTML = markup
    }
  });
}

localStorage.length !== 0 && lightboard ? renderData() :
  lightboard ? lightboard.innerText = "No data" : '';