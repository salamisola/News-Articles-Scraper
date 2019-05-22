//Server routes
Var scrape = require("../scripts/scrape");

//headline and notes from controller
var headlinesController = require("../controllers/headlines");
var notesController = require("../controllers/notes");

module.exports = function (router) {
    //Route to render the hompage
    router.get("/", function (req, res) {
        res.render("home");
    });
    //To render the saved handlebars page
    router.get("/saved", function (req, res) {
        res.render("saved");
    });
    //API routes added
    router.get("/api/fetch"), function (req, res) {
        headlinesController.fetch(function (err, docs) {
            if (!docs || docs.insertedCount === 0) {
                res.jason({
                    message: "No new articles today. Check back tomorrow!"
                })
            } else {
                res.json({
                    message: "added " + docs.insertedCount + " new articles"
                });
            }
        });
    }
}