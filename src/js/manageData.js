import { storageData } from './storageData.js';
import createNode from './createNode.js';

const specialist = document.querySelector('.specialist__select');
console.log(storageData);

const rederData = () => {
  storageData.forEach(item => {
    const option = createNode("option", 'specialist__option');
    specialist.appendChild(option);
    const optionMarkup = `
  <option value="Lol"> ${item.name} </option>
`;
    option.innerHTML = optionMarkup;
  });
}

localStorage.length !== 0 ? rederData() : lightboard.innerText = "No data";