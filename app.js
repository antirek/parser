var request = require('request'), 
    cheerio = require('cheerio');

var debug = true;


var fetchUrlList = function (url, cb) {
    request({uri: url, method:'GET'}, function (err, res, page) {
        var $ = cheerio.load(page);
        var items = $('html ul.items_catalog li.span4 div.description a').map(function (i, element) {
            if (!$(this).hasClass('count_response')) {
                
                if (debug) console.log(i, $(this).text(), $(this).attr('href'));
                return {
                    text: $(this).text(),
                    href: $(this).attr('href')
                };
            }
        });
        cb(items);
    });
};

fetchUrlList(url1, function (items) {
    items.map(function (i, el) {
        console.log('-i', el);
    })
});