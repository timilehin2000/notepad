const Note = require('../models/noteModel');
exports.getAllNotes = async (req, res) => {
  try {
    console.log(req.query);
    const notes = await Note.find(req.query).sort('-createdAt');

    res.status(200).json({
      status: 'success',
      result: notes.length,
      data: {
        notes,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createNotes = async (req, res) => {
  try {
    const newNote = await Note.create(req.body);
    res.status(200).json({
      status: 'success',
      data: {
        notes: newNote,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        note,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.updateNote = async (req, res) => {
  try {
    const notes = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: {
        notes,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteNote = async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
