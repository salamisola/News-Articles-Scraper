module.exports = function (router) {
    //Route to render the hompage
    router.get("/", function (req, res) {
        res.render("home");
    });
    //To render the saved handlebars page
    router.get("/", function (req, res) {
        res.render("saved");
    });
}