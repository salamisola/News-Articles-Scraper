//Set controller for notes
var scrape = require("../models/Note");
var makeDate = require("../scripts/date");

module.exports = {
    get: function (data, cb) {
        Note.find({
            _headlineId: data._id
        }, cb);
    },
    save: function (data, cb) {
        var newNote = {
            _headlineId: data._id,
            date: makeDate(),
            noteText: data.noteText
        };
        Note.create(newNote, function (err, doc) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(doc);
            }
        });
    },
    //function to delete notes
    delete: function (data, cb) {
        Note.remove({
            _id: data.id
        }, cb);
    }
}