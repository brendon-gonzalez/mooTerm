var request = require('request');
var cheerio = require('cheerio');
var cowsay = require('cowsay');
request({
  url: 'http://www.randomtriviagenerator.com/entertainment.php'
}, function(e, r, b) {
  var $ = cheerio.load(b);
  var row = $('table tr').eq(1).find('[align="left"]');
  var cows  = ['vader', 'moofasa', 'default', 'small', 'moose', 'daemon', 'dragon'];
  var eyes  = ['XX', '@@', '><', 'Oo', '^^'];

  if (e || r.statusCode !== 200 || !row.length ) {
    question = 'What happened to your request for facts?'
    answer = 'It failed';
  } else {
    question = row.first().text();
    answer = row.eq(1).text();
  }

  console.log('Prophet Moohammad says:\n', cowsay.say({
    e: eyes[Math.floor(Math.random() * eyes.length)],
    f: cows[Math.floor(Math.random() * cows.length)],
    text: question + '\n\n' + answer
  }));
});
