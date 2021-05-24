const fs = require('fs');
const router = require('express').Router();
const { nanoid } = require('nanoid')

module.exports = router;

//GET /api/notes reads the db.json file and return all saved notes as JSON.
router.get('/notes', (req, res) => {
    fs.readFile('db/db.json', "utf8", (err, data) => {
        res.json(JSON.parse(data));
    })
})

// POST /api/notes will validate route path, 
// then it will read file and add unique ID number using nanoID npm
// then add new note to the array of objects in db.json using push method
// finally will re-write db.json as a new JSON string
router.post('/notes', (req, res) => {
    const { body } = req;
    if (body === undefined) {
        res.send("NO NOTES PAGE");
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
                console.log("Error at writeFile(): ", err);
                throw err;
            }
        });
    });
});

