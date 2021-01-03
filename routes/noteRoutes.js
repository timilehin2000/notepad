const express = require('express');
const noteControllers = require('../Controllers/noteControllers');

const router = express.Router();

router
  .route('/')
  .get(noteControllers.getAllNotes)
  .post(noteControllers.createNotes);

router
  .route('/:id')
  .get(noteControllers.getNote)
  .patch(noteControllers.updateNote)
  .delete(noteControllers.deleteNote);

module.exports = router;
