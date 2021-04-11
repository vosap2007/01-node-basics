const fs = require('fs/promises')
const path = require('path')
//const contactsPath = path.join('db', 'contacts.json')
const contactsPath = path.join(__dirname, './bd/contacts.json')

// TODO: задокументировать каждую функцию
/* function listContacts() {
    fs.readFile(contactsPath, (err, data) => {
        if(err) throw err;
        console.log(data.toString());
    });
  }*/

function listContacts() {
    fs.readFile(contactsPath)
    .then((data) => console.log(data.toString()))
    .catch((err) => console.log(err.message))
}
  
  function getContactById(contactId) {
    fs.readFile(contactsPath, (err, data) => {
        if(err) throw err;
        console.log(JSON.parse(data));
    });
  }
  
  function removeContact(contactId) {
    fs.unlink(contactId, (err) => {
        if(err) throw err
        return
    })
  }
  
  function addContact(name, email, phone) {
    fs.readFile(contactsPath, (name, email, phone), (err) => {
        if(err) throw err;
        console.log(data.toString());
    });
  }

  module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
  }