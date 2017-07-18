'use strict'
const clients = require('./clients.json');

const searchByCity = function(city) {
  //make city uppercase
  let upperCity = city.toUpperCase();
  /*filter through clients, matching city provided to city within clients, making
  sure to uppercase the city names to make an case-insensitive search*/
  let filteredClients = clients.filter(function(word) {
    return (word.city.toUpperCase() === upperCity)
  })
  //one last loop to remove no_employees, phone, and created_at
  for (var i = 0; i < filteredClients.length; i++) {
    delete filteredClients[i].no_employees;
    delete filteredClients[i].phone;
    delete filteredClients[i].created_at;
  }
  console.log('Finding clients in city ' + "'" + city + "'")
  console.log(filteredClients)
}

searchByCity(process.argv[2])
