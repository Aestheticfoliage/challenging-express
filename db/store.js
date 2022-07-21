const fs = require("fs");

// This package will be used to generate our unique id
const uuidv1 = require("uuid/v1");
const util = require("util");
const { notStrictEqual } = require("assert");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
  getNotes() {
    return readFileAsync("db/db.json", "utf-8").then((notes) => {
      return JSON.parse(notes);
      //         try {
      //                 parsedNotes = [].concat(JSON.parse(notes))
      //         } catch (err){
      //                 parsedNotes = []
      //         }
    });
  }
  addNote(note) {
    const { title, text } = note;

    if (!title || !text) {
      throw new Error("Title and text are required");
    }
    const newNote = { title, text, id: uuidv1() };

    this.getNotes().then((notes) => {
      notes.push(newNote);
    });
  }
}
module.exports = new Store();
