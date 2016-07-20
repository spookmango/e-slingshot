var Epub = require("epub-gen");
var request = require("request");
var cheerio = require("cheerio");

var archiveURL = "http://slingshot.tao.ca/?page_id=115025";

request(archiveURL, function(error, response, body) {
	if(!error) {
		var $ = cheerio.load(body);
		var h = $('.entry-content').find('a');
		var urls = [];
		var base = "http://slingshot.tao.ca";
		for (var i = 0; i < h.length; i++){
			var href = h[i].attribs.href;
			parseArticle(href.indexOf(base) !== -1 ? href : base + href);
		}
		console.log(urls);
	} else {
		console.log("error on archive " + error);
	}
});


function parseArticle(url) {
	request(url, function (error, response, body) {
	  if (!error) {
	    var $ = cheerio.load(body);
	    var titleEl = $("title").text();
	    var title = "Slingshot " + titleEl.substring(0, titleEl.indexOf('|')).trim();
	    var filename = title.replace(/( |\/)/g, '_'); // sanitize file name
	    var articles = $("article");
	    var parsedArticles = [];
	    for (var i = 0; i < articles.length; i++) 
	    	parsedArticles.push(parseArticleHtml($(articles[i]).html()));
	    var book = {
	    	title: title,
	    	author: "Various",
	    	publisher: "Slingshot Collective",
	    	content: parsedArticles
	    };
	    new Epub(book, "epub/" + filename + ".epub");
	  } else {
	    console.log("error on issue " + error);
	  }
	});
}

function parseArticleHtml(article) {
	var obj = {};
	var $ = cheerio.load(article);
	var date = $('.entry-date').find('.entry-date').text();
	obj.title = ($($('.entry-title').children()[0]).text()) + ' - (' + date + ')';
	obj.author = ($($('.author').children()[0]).text());
	obj.data = $('.entry-content').text();
	return obj;
}

