const button = document.querySelector('.save');

const getData = (callback) => {
  fetch('src/js/json/clients.json')
  .then(res => res.json())
  .then(res => {
    callback(res);
  })
}

const loadData = (e) => {
  e.preventDefault();
  getData(res => {
    let stringData = JSON.stringify(res); 
    localStorage.setItem('clients', stringData)
  })
  alert('Pavyzdiniai duomenys išaugoti');
}

button ? button.addEventListener('click', loadData) : '';
