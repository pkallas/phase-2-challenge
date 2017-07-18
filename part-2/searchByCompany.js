'use strict'
const clients = require('./clients.json')

const searchByCompany = function(name) {
  //make provided name uppercase
  let upperName = name.toUpperCase();
  /*filter through clients, matching name provided to companies in clients,
  making sure to uppercase the company names*/
  let filteredClients = clients.filter(function(word) {
    return (word.company.toUpperCase().startsWith(upperName))
  })
  //one last loop to remove rep_name, no_employees, city, state, and created_at
  for (var i = 0; i < filteredClients.length; i++) {
    delete filteredClients[i].rep_name;
    delete filteredClients[i].no_employees;
    delete filteredClients[i].city;
    delete filteredClients[i].state;
    delete filteredClients[i].created_at;
  }
  console.log('Finding companies with name ' + "'" + name + "'")
  console.log(filteredClients)
}

searchByCompany(process.argv[2])
