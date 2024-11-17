import express from 'express';// why we are using this // WHat Why How  - inprogress
import bodyParser from 'body-parser'; // why we are using this // WHat Why How    - inprogress
import fs from 'fs'; // why we are using this // WHat Why How  - inprogress
const app = express(); // why we are using this // WHat Why How  - inprogress
const port = 3001;//- inprogress
import { v4 as uuidv4 } from 'uuid'; //- inprogress
// Middleware
app.use(bodyParser.json()); //- inprogress
app.use(express.static('public')); // why we are using this line //- inprogress

// Load contacts from a JSON file (acts as a simple database)
// import contacts from './contact.json';
import contacts from './contact.json' assert { type: 'json' }; //- inprogress

console.log("contacts",contacts)
// let contacts=[];

// GET: Read all contacts
app.get('/api/contact', (req, res) => { //- inprogress
    res.json(contacts);
});

// POST: Create a new contact
app.post('/api/contact', (req, res) => { //- inprogress
    console.log("contacts initial:",contacts)
    const newContact = req.body;
    console.log("before id: ",newContact)

    newContact.id = uuidv4();
    console.log("after id : ",newContact)
    contacts.push(newContact);
    console.log("contacts after updated:", contacts)
    fs.writeFileSync('./contact.json', JSON.stringify(contacts, null, 2));
    res.status(201).json(newContact);
});


app.listen(port, () => {
    console.log(`Server running port:${port}`);
});
