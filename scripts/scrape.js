//Scrape script

//Option 1
// Parses our HTML and helps us find elements
const cheerio = require('cheerio');
// Makes HTTP request for HTML page
const axios = require('axios');

// First, tell the console what server.js is doing
console.log(
    '\n***********************************\n' +
    'Grabbing every thread name and link\n' +
    "from reddit's webdev board:" +
    '\n***********************************\n'
);

// Making a request via axios for reddit's "webdev" board. The page's HTML is passed as the callback's third argument
axios.get('https://www.nytimes.com/').then(function (response) {
    // console.log(response);
    // Load the HTML into cheerio and save it to a variable
    // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
    const $ = cheerio.load(response.data);

    // An empty array to save the data that we'll scrape
    const results = [];

    // With cheerio, find each p-tag with the "title" class
    // (i: iterator. element: the current element)
    $('h2').each(function (i, element) {
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
            results.push({
                title,
                link,
            });
        }
        //   link,

        // In the currently selected element, look at its child elements (i.e., its a-tags),
        // then save the values for any "href" attributes that the child elements may have
        // const link = $(element)
        //   .children()
        //   .attr('href');

        // console.log({
        //   title,
        //   //   link,
        // });
        // Save these results in an object that we'll push into the results array we defined earlier
    });

    // Log the results once you've looped through each of the elements found with cheerio
    console.log(results);
});
/* var result = {
title,
link
} */



/* db.Article.create(result)
.then(function (dbArticle) {
    console.log(dbArticle);

})
.catch(function (err) {
    console.log(err);
});
 }); */
 //Option2
 //=======================================
//Require request and cheerio
/* var request = require("request");
var cheerio = require("cheerio");
var mongoose = require("mongoose");


//the callback function
var scrape = function (cb) {
    request("http://www.nytimes.com", function (err, res, body) {

        var $ = cheerio.load(body);

        var articles = [];

        //==============================

        $(".h2").each(function (i, element) {
            var head = $(this).children(".title").text().trim();
            var sum = $(this).children(".link").text().trim();
            R//eplace RegExp method
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


module.exports = scrape; */

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
