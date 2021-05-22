const fs = require('fs');
const router = require('express').Router();
// pulling in instance of db json file content
let db = require('../../db/db.json');
const { nanoid } = require('nanoid')

//GET /api/notes reads the db.json file and return all saved notes as JSON.
router.get('/notes', (req, res) => {
    res.json(db);
})

// POST /api/notes receives a new note, adds it db.json, then returns new note to client
router.post('/notes', (req, res) => {
    // req.body.id = notes.length.toString();
    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: nanoid(10)"
    }
    console.log(nanoid)
    //add existing db object to new note and write new file .  push to db
})






module.exports = router;