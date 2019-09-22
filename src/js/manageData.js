import {
  storageData
} from './storageData.js';
import createNode from './createNode.js';
let storageDataz = storageData;
const specialist = document.querySelector('.specialist__select');
const dataContainer = document.querySelector('.specialist__data');
let checked = [];

const rederData = () => {
  const getDataRender = () => {

    // Get all different specialists
    storageDataz.map(item => {
      !checked.includes(item.specialist) ? checked.push(item.specialist) : '';
      return checked;
    })

    // render options
    specialist ? specialist.innerHTML = '' : '';
    checked.map(item => {
      const option = createNode("option", 'specialist__option');
      specialist ? specialist.appendChild(option) : '';
      option.innerHTML = item;
    });
    checked = [];
  }
  getDataRender();

  const onChangeHandler = () => {
    dataContainer.innerHTML = '';
    let clientData = storageDataz.filter(item => item.specialist === specialist.value);

    const dataMap = () => {
      clientData.map(item => {
        const div = createNode('div', 'specialist__row');
        dataContainer.appendChild(div);
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
const deleteHandler = () => {
  document.addEventListener('click', (e) => {
    if (e.target.matches('.specialist__delete')) {
      const id = e.target.dataset.id;
      const newList = storageDataz.filter(list => list.number !== id);
      localStorage.removeItem('clients');
      localStorage.setItem('clients', JSON.stringify({
        clients: [...newList]
      }));
      storageDataz = JSON.parse(localStorage.getItem('clients')).clients;
      onChangeHandler();
    }
  }, false);
}
    specialist ? specialist.onchange = () => {
      deleteHandler();
      onChangeHandler();
  } : '';
} 

localStorage.length !== 0 ? rederData() :
specialist ? specialist.innerText = "No data" : '';
