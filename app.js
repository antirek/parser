var request = require('request'), 
	cheerio = require('cheerio');

//Загружаем страницу
request({uri:'http://www.amazon.com/', method:'GET'},
    function (err, res, page) {
        var $=cheerio.load(page);
        var img_src=$('html').html();
        console.log(img_src);
    });