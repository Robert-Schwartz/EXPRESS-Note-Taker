const fs = require('fs');
const router = require('express').Router();
// pulling in instance of db json file content
let db = require('../../db/db.json');

router.get('/notes', (req, res) => {
    res.json(db);
})



module.exports = router;