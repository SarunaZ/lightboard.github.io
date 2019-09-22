export let storageData = localStorage.length !== 0 ? JSON.parse(localStorage.getItem('clients')).clients : '';
