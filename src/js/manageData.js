/**
 * @file Functionality for selecting and rendering data on the specialist.html page
 */

import {
  storageData
} from './storageData.js';
import createNode from './createNode.js';
let newStorageData = storageData;
const specialist = document.querySelector('.specialist__select');
const dataContainer = document.querySelector('.specialist__data');
let checked = [];

const rederData = () => {
  const getDataRender = () => {

    // Get all different specialists names to one list and render it to the select element as options
    newStorageData.map(item => {
      !checked.includes(item.specialist) ? checked.push(item.specialist) : '';
      return checked;
    })

    checked.map(item => {
      const option = createNode("option", 'specialist__option');
      specialist ? specialist.appendChild(option) : '';
      option.innerHTML = item;
    });
  }
  getDataRender();

  const onChangeHandler = () => {
    dataContainer.innerHTML = '';
    let clientData = newStorageData.filter(item => item.specialist === specialist.value);

    const dataMap = () => {
      clientData.map(item => {
        const div = createNode('div', 'specialist__row');
        dataContainer.appendChild(div);
        // Adding a data set to button, so function could filter specific information out
        const markUp = `
            <p class="specialist__client-name">${item.name}</p>
            <p class="specialist__client-no">${item.number}</p>
            <button data-id="${item.number}" class='specialist__delete button'>Aptarnauta</button>
    `
        div.innerHTML = markUp;
      })
    }
    dataMap();
  }

  // Handler for deleting entries and creating a new list to store on localstorage
  const deleteHandler = () => {
    document.addEventListener('click', (e) => {
      if (e.target.matches('.specialist__delete')) {
        const id = e.target.dataset.id;
        const newList = newStorageData.filter(list => list.number !== id);
        localStorage.removeItem('clients');
        localStorage.setItem('clients', JSON.stringify({
          clients: [...newList]
        }));
        newStorageData = JSON.parse(localStorage.getItem('clients')).clients;
        onChangeHandler();
      }
    }, false);
  }
  specialist ? specialist.onchange = () => {
    deleteHandler();
    onChangeHandler();
  } : '';
}

// Only render data if there is data and if there is a specific element
localStorage.length !== 0 ? rederData() :
  specialist ? specialist.innerText = "No data" : '';