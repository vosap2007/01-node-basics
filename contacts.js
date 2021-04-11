const fs = require('fs')
const path = require('path')
const contactsPath = path.join('db', 'contacts.json')
//const contactsPath = path.join(__dirname, './bd/contacts.json')
//const contactsPath = path.resolve('./db/contacts.json')

 function listContacts() {
    fs.readFile(contactsPath, (err, data) => {
        if(err) 
        return console.error(err.message);
        console.table(JSON.parse(data));
    });
  }

/*function listContacts() {
    fs.readFile(contactsPath)
    .then((data) => console.table(JSON.parse(data.toString())))
    .catch((err) => console.log(err.message))
}*/
  
  /*function getContactById(contactId) {
    fs.readFile(contactsPath)
    .then((data) => console.table(JSON.parse(data.toString())))
      const contacts = JSON.parse(data)
    const contact = contacts.find(contact => contact.id === contactId)
    console.log(contact)
    
    .catch((err) => console.log(err.message))
  }*/
  
  function getContactById(contactId) {
  fs.readFile(contactsPath, (err, data) => {
    if (err) {
      console.log(err.message)
    }
    const contacts = JSON.parse(data)
    const contact = contacts.find(contact => contact.id === +contactId)
    console.log(contact)
  })
}

function addContact(name, email, phone) {
        fs.appendFile(contactsPath, (name, email, phone), function(error){
          if(error) {
            console.log(err.message)
          }
          
          let contact = fs.readFileSync(contactsPath, "utf8");
          console.table(JSON.parse(contact));
      });
    }

  function removeContact(contactId) {
    fs.unlink(contactId, (err, data) => {
        if(err) {
          console.log(err.message)
        }
        console.table(JSON.parse(data.toString()));
    })
  }
  
  module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
  }