const fs = require('fs')
const path = require('path')
const shortid = require('shortid')
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
  //const id = shortid.generate()
  //const contact = {name, email, phone, id}
  const contact = { id: shortid.generate(), name: name, email: email, phone: phone };

  fs.readFile(contactsPath, (err, data) => {
      if(err) 
      return console.error(err.message);

      let contacts = JSON.parse(data)
      let newArray = contacts.concat(contact);
      
      fs.writeFile(contactsPath, JSON.stringify(newArray), (err) => {
        if(err) 
        return console.error(err.message)
        console.table(newArray);
  });
})}

   /* fs.writeFile(file, JSON.stringify(data), callback)

    function addContact(name, email, phone) {
      fs.writeFileSync(contactsPath, (err, data) => {
        if(err) {
          console.log(err.message)
        }
        console.log(JSON.parse(data.toString()))
    })
  }*/

  function removeContact(contactId) {
    fs.readFile(contactsPath, (err, data) => {
      if(err) 
      return console.error(err.message);

      let contacts = JSON.parse(data)
      //const newArray = contacts.filter(({id})=>{id !== contactId})
      //const newArray = contacts.filter(({id})=>{return id !== contactId})
      const newArray = contacts.filter(({id})=>id !== contactId)

      fs.writeFile(contactsPath, JSON.stringify(newArray), (err) => {
        if(err) 
        return console.error(err.message)
        console.table(newArray);
  });
})
}
  
  module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
  }