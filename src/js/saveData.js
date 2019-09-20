const button = document.querySelector('button');

const getData = (callback) => {
  fetch('src/js/json/clients.json')
  .then(res => res.json())
  .then(res => {
    callback(res);
  })
}

const loadData = () => {
  getData(res => {
    let stringData = JSON.stringify(res); 
    localStorage.setItem('clients', stringData)
  })
}

button.addEventListener('click', loadData);
