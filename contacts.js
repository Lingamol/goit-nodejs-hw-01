const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.resolve('./db/contacts.json');

function listContacts() {
  fs.readFile(contactsPath, 'utf-8')
    .then(data => {
      console.table(data);
      if (!data) {
        console.warn('there no contacts!!');
        return;
      }
      return JSON.parse(data);
    })
    .then(result => console.table(result))
    .catch(error => console.error(error));
}

function getContactById(contactId) {
  fs.readFile(contactsPath, 'utf-8')
    .then(data => JSON.parse(data))
    .then(result => result.find(contact => Number(contact.id) === contactId))
    .then(result => {
      console.table(result);
    })
    .catch(error => console.error(error));
}

function removeContact(contactId) {
  fs.readFile(contactsPath, 'utf-8')
    .then(data => JSON.parse(data))
    .then(result =>
      result.filter(contact => {
        if (contact.id !== toString(contactId)) {
          return contact;
        }
      }),
    )
    .then(result => {
      fs.writeFile(contactsPath, JSON.stringify(result), 'utf-8');
      console.table(result);
    })
    .catch(error => console.error(error));
}
function addContact(name, email, phone) {
  fs.readFile(contactsPath, 'utf-8')
    .then(data => {
      if (!data) {
        console.warn('there no contacts');
        return;
      }
      return JSON.parse(data);
    })
    .then(result => {
      const id = JSON.stringify(getMaxId(result) + 1);
      return [...result, { id, name, email, phone }];
    })
    .then(result => {
      console.table(result);
      fs.writeFile(contactsPath, JSON.stringify(result), 'utf-8');
    })
    .catch(error => console.error(error));
}

function getMaxId(contactsList) {
  return contactsList.reduce(
    (maxId, contact) => (Number(contact.id) > maxId ? (newId = Number(contact.id)) : maxId),
    0,
  );
}

module.exports = { listContacts, getContactById, removeContact, addContact };
