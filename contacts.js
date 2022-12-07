const fs = require('fs').promises;
const path = require('path');
const { program } = require('commander');
require('colors');

const contactsPath = '';

function listContacts() {
  console.log('List');
  // ...твой код
}

function getContactById(contactId) {
  // ...твой код
  console.log('getContactById', contactId);
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}
module.exports = { listContacts, getContactById, removeContact, addContact };
