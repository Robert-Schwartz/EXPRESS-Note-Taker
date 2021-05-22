const router = require('express').Router();
const noteRoute = require('./api');


router.use(noteRoute);

module.exports = router;