const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A title is required'],
  },
  description: {
    type: String,
    required: [true, 'A description is required'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

const Note = mongoose.model('Note', noteSchema);
module.exports = Note;

// const newNotes = new Note({
//   title: 'opoor',
//   description: 'fjkfjsjlfldiuf',
// });
// newNotes
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log(err + 'oshi');
//   });
