const express = require('express');
const { createNote, getNote } = require('../controllers/noteControllers');

const router= express.Router()

router.route('/').post(createNote);
router.route('/').get(getNote);



module.exports = router