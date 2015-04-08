var request = require('request');
var cheerio = require('cheerio');
var cowsay = require('cowsay');
request({
  url: 'http://subfusion.net/cgi-bin/quote.pl?quote=cookie&number=1'
}, function(e, r, b) {
  var $ = cheerio.load(b);
  var cows  = ['vader', 'moofasa', 'default', 'small', 'moose', 'daemon', 'dragon'];
  var eyes  = ['XX', '@@', '><', 'Oo', '^^'];
  console.log('Prophet Moohammad says:\n', cowsay.say({
    e: eyes[Math.floor(Math.random() * eyes.length)],
    f: cows[Math.floor(Math.random() * cows.length)],
    text: $('body').text().replace(/\"/g, '')
  }));
});
