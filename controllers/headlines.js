var scrape = require("../scripts/scrape");
var makeDate = require("../scripts/date");

//require Headline and Note models
var Headline = require("../models/headline");

module.exports = {
    //to run fetch and grab articles and store in the "articles variable"
    fetch: function (cb) {
        scrape(function (data) {
            var articles = data;
            for (var i = 0; i < articles.length; i++) {
                articles[i].date = makeDate();
                articles[i].saved = false;
            }
            //Mongo function to grab headlines and insert all articles into the headline collection
            Headline.collection.insertMany(articles, { ordered: false }, function (err, docs) {
                cb(err, docs);
            });
        });
    },
    //the function to delete articles from the database
    delete: function (query, cb) {
        Headline.remove(query, cb);
    },
    //function to get and sort all of the articles in the headline collection out
    get: function (query, cb) {
        Headline.find(query)
            .sort({
                _id: -1
            })
            .exec(function (err, doc) {
                cb(doc);
            });
    },
    //function to update articles
    update: function (query, cb) {
        Headline.update({ _id: query._id }, {
            $set: query
        }, {}, cb);
    }

}