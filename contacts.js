const fs = require('fs').promises;
const path = require('path');
const shortid = require('shortid');

// const contactsPath = path.resolve('./db/contacts.json');
const contactsPath = path.join(__dirname, '/db/contacts.json');

async function listContacts() {
  const listContacts = await fs.readFile(contactsPath, 'utf-8');
  return JSON.parse(listContacts);
}

async function getContactById(contactId) {
  const contactsList = await listContacts();
  const contactById = contactsList.find(contact => contact.id === contactId);
  return contactById || null;
}

async function removeContact(contactId) {
  const contactsList = await listContacts();
  const index = contactsList.findIndex(contact => contact.id === contactId);
  if (index === -1) {
    return null;
  }
  const [result] = contactsList.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contactsList, null, 2), 'utf-8');
  return result;
}
async function addContact(name, email, phone) {
  const newContact = { id: shortid.generate(), name, email, phone };
  const contactsList = await listContacts();
  // const newListContacts = [...contactsList, newContact];
  contactsList.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contactsList, null, 2), 'utf-8');
  return newContact;
}

module.exports = { listContacts, getContactById, removeContact, addContact };
