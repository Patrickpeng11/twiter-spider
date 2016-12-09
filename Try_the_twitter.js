var Twitter = require('twitter');
var t = new Twitter({
    consumer_key: '',
    consumer_secret: '',
    token: '',
    token_secret: ''
  });
  
t.on('tweet', function (tweet) {
  console.log('tweet received', tweet)
})
 
t.on('error', function (err) {
  console.log('Oh no')
})
 
t.track('nodejs')
t.track('pizza')
 
// 5 minutes later
t.track('tacos')
 
// 10 minutes later
t.untrack('pizza')