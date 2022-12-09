// const argv = require('yargs').argv;
const { listContacts, getContactById, removeContact, addContact } = require('./contacts');
const { Command } = require('commander');
const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const contactsList = await listContacts();
      console.table(contactsList);
      break;

    case 'get':
      // ... id
      const contactById = await getContactById(id);
      console.table(contactById);
      break;

    case 'add':
      // ... name email phone
      const newContact = await addContact(name, email, phone);
      console.table(newContact);
      break;

    case 'remove':
      // ... id
      const deletedContact = await removeContact(id);
      console.table(deletedContact);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
