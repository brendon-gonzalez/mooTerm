var request = require('request');
var cowsay = require('cowsay');
request({
  url: 'http://159.203.60.127/questions?category=entertainment&limit=1&page=1',
  json: true,
}, function(e, r, b) {

  var cows  = ['vader', 'moofasa', 'default', 'small', 'moose', 'daemon', 'dragon'];
  var eyes  = ['XX', '@@', '><', 'Oo', '^^'];

  if (e || r.statusCode !== 200 || !b.question ) {
    question = 'What happened to your request for facts?'
    answer = 'It failed';
  } else {
    question = b.question;
    answer = b.answer;
  }

  console.log('Prophet Moohammad says:\n', cowsay.say({
    e: eyes[Math.floor(Math.random() * eyes.length)],
    f: cows[Math.floor(Math.random() * cows.length)],
    text: question + '\n\n' + answer
  }));
});
