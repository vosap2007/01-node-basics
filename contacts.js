const fs = require('fs/promises')
const path = require('path')
const contactsPath = path.join('db', 'contacts.json')
//const contactsPath = path.join(__dirname, './bd/contacts.json')
//const contactsPath = path.resolve('./db/contacts.json')
// TODO: задокументировать каждую функцию
/* function listContacts() {
    fs.readFile(contactsPath, (err, data) => {
        if(err) throw err;
        console.table(JSON.parse(data.toString()));
    });
  }*/

function listContacts() {
    fs.readFile(contactsPath)
    .then((data) => console.table(JSON.parse(data.toString())))
    .catch((err) => console.log(err.message))
}
  
  /*function getContactById(contactId) {
    fs.readFile(contactsPath)
    .then
      const contacts = JSON.parse(data)
    const contact = contacts.find(contact => contact.id === contactId)
    console.log(contact)
    
    .catch((err) => console.log(err.message))
  }*/
  
  function getContactById(contactId) {
  fs.readFile(contactsPath, {encoding: 'utf-8'}, (err, data) => {
    if (err) {
      console.log(err.message)
    }
    const contacts = JSON.parse(data)
    const contact = contacts.find(contact => contact.id === +contactId)
    console.log(contact)
  })
}

getContactById(5);

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