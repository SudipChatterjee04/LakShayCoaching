const noteModels = require('../models/noteModels');
const asyncHandler = require('express-async-handler');

const createNote = asyncHandler(async(req , res) => {
    const {noteTitle , noteSubject , noteClass , noteBatch , noteImage , notePdf, noteCourse} = req.body;
 
    const note = await noteModels.create({
        noteTitle , noteSubject , noteClass , noteBatch , noteImage , notePdf, noteCourse
    })
    res.status(200).json(note);

})


const getNote = asyncHandler(async(req , res) => {
    const notes = await noteModels.find()
    res.status(200).json(notes);
})



module.exports = {createNote , getNote }