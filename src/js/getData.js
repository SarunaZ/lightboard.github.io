/**
 * @file Functionality for data rendering on the index.html page
 */

import {
  storageData
} from './storageData.js';
import createNode from './createNode.js';
const lightboard = document.querySelector('.lightboard');
let current = '';
let collumn = '';

const renderData = () => {
  // Sorting data by specialist and queue number
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

  // Rendering data from the sorted list
  sorted.forEach(item => {
    // Adding one of each specialist clients to current
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

// Only render data if there is data and if there is a specific element
localStorage.length !== 0 && lightboard ? renderData() :
  lightboard ? lightboard.innerText = "Duomenys nėra užkrauti" : '';