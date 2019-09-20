import {
  storageData
} from './storageData.js';
import createNode from './createNode.js';
let storageDataz = storageData;
const specialist = document.querySelector('.specialist__select');
const row = document.querySelector('.specialist__row');
console.log(storageDataz);
    let checked = [];

const rederData = () => {


  const getDateRender = () => {
    // Get all different specialists 
    storageDataz.map(item => {
      checked.indexOf(item.specialist) === -1 ? checked.push(item.specialist) : '';
      return checked;
    })



    // render options
    checked.map(item => {
      const option = createNode("option", 'specialist__option');
      specialist.appendChild(option);
      option.innerHTML = item;
    });
  }
  getDateRender();


  // const buttonFuncDicks = (itemNo) => {

  // }
  const onChangeHandler = () => {
    row.innerHTML = '';
    let clientData = storageDataz.filter(item => item.specialist === specialist.value);

    const dataMap = () => {
      clientData.map((item, index) => {
        const p = createNode('div', 'specialist__data');
        row.appendChild(p);
        const markUp = `
            <p class="specialist__client-name">${item.name}</p>
            <p class="specialist__client-no">${item.number}</p>
            <button data-id="${item.number}" class='specialist__delete'>X</button>
    `
        p.innerHTML = markUp;

      })
    }
    dataMap();
  }

   specialist.onchange = () => {
      document.addEventListener('click', (e) => {
        if (e.target.matches('.specialist__delete')) {
          console.log(e)
          const id = e.target.dataset.id;
          const newList = storageDataz.filter(list => list.number !== id);
          localStorage.removeItem('clients');
          localStorage.setItem('clients', JSON.stringify({
            clients: [...newList]
          }));
          storageDataz = localStorage.length !== 0 ? JSON.parse(localStorage.getItem('clients')).clients : '';
          console.log(storageDataz)
          // e.target.parentNode.remove();
          // getDateRender();
          onChangeHandler();
        }
      }, false);
     onChangeHandler();
    }


}


localStorage.length !== 0 ? rederData() : specialist.innerText = "No data";