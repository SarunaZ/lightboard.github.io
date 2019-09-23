/**
 * @file Functionality for saving demo data for the entire site at admin.html page
 */

const button = document.querySelector('.save');

// Fetching data from a local file
const getData = (callback) => {
  fetch('src/js/json/clients.json')
  .then(res => res.json())
  .then(res => {
    callback(res);
  })
}

// Saving local data to localstorage
const loadData = (e) => {
  e.preventDefault();
  getData(res => {
    let stringData = JSON.stringify(res); 
    localStorage.setItem('clients', stringData)
  })
  alert('Pavyzdiniai duomenys išaugoti');
}

button ? button.addEventListener('click', loadData) : '';
