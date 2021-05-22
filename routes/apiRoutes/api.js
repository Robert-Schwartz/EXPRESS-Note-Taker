const fs = require('fs');
const router = require('express').Router();
const { nanoid } = require('nanoid')

module.exports = router;

//GET /api/notes reads the db.json file and return all saved notes as JSON.
router.get('/notes', (req, res) => {
    let db = require('../../db/db.json');
    res.json(db);
})

router.post('/notes', (req, res) => {
    const { body } = req;
    if (body === undefined) {
        res.send("NO NOTE");
        return;
    }
    fs.readFile('db/db.json', "utf8", (err, data) => {
        console.log("Data:", data);
        let db = JSON.parse(data);
        body.id = nanoid(8);
        db.push(body);
        fs.writeFile('db/db.json', JSON.stringify(db), (err) => {
            if (!err) {
                res.send("ok");
            } else {
                console.log("Error at writeFile: ", err);
                throw err;
            }
        });
    });
});


/*
// POST /api/notes receives a new note, adds it db.json, then returns new note to client
router.post('/notes', (req, res) => {
    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: nanoid(8)
    }
    console.log("newNote =" + newNote)
    AddNewNote(newNote);
})

// read file to get file from db.json then push, then re-write
const AddNewNote = (newNote) => {
fs.readFile(db, 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(data)
})
}
*/
