//Scrape script

//Require request and cheerio
var request = require("request");
var cheerio = require("cheerio");
var mongoose = require("mongoose");


//the callback function
var scrape = function (cb) {
    request("http://www.nytimes.com", function (err, res, body) {

        var $ = cheerio.load(body);

        var articles = [];

        //==============================

        $(".theme-summary").each(function (i, element) {
            var head = $(this).children(".story-heading").text().trim();
            var sum = $(this).children(".summary").text().trim();

            if (head && sum) {
                var headNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
                var sumNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

                var dataToAdd = {
                    headline: headNeat,
                    summary: sumNeat
                };

                articles.push(dataToAdd);
            }
        });
        cb(articles);
    });
};


module.exports = scrape;

/* $('h2').each(function (i, element) {
             console.log(`-----${i}--------`);
             // Save the text of the element in a "title" variable
             const title = $(element)
                 .find('span')
                 .text();
             console.log(`title: ${title}`);

             const link = $(element)
                 .closest('a')
                 .attr('href');

             console.log(link);
             if (title && link) {
                 articles.push({
                     title,
                     link,*/
/* }); */
