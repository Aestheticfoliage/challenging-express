const router = require('express').Router();
const store = require('../db/store');
const { v4: uuidv4 } = require('uuid');
const {
  readFromFile,
  readAndAppend,
  writeToFile,
  readAndDelete,
} = require('../helpers/fsUtils');

router.get('/notes', (req, res) => {
  // store.addNote();
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  // let data = readFromFile('./db/db.json').then((data) => data);
  // res.send(data);
});
router.post('/notes', (req, res) => {
  const newNote = req.body;
  newNote.id = uuidv4();

  readAndAppend(newNote, './db/db.json');
  res.json(newNote);
});

router.delete('/notes/:id', (req, res) => {
  readAndDelete(req.params.id, './db/db.json');
  res.json({ok: true });
});

module.exports = router;
