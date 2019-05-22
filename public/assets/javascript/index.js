$(document).ready(function () {


    var articleContainer = $(".article-container");
    $(document).on("click", ".btn.save, handleArticleSave");
    $(document).on("click", ".scrape-new, handleArticleScrape");

    initPage(); {
        articleContainer.empty();
        screen.get("/api/headlines?saved=flase")
            .then(function (data) {
                if (data && data.length) {
                    renderArtcles(data);
                } else {
                    renderEmpty();
                }
            });
    }
    function renderArticles(articles) {
        var artclePanels = [];

        for (var i = 0; i < article.length; i++)
            articlePanels.push(creatPanel(articles[i]));
    }

})