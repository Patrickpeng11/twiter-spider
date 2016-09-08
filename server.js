var express=require('express');
var http=require('http');
var path=require('path');
var bodyParser=require('body-parser');
var router= express();
var server= http.createServer(router);
router.use(bodyParser.json());

var Twitter = require('twitter');
router.use(express.static(path.resolve(__dirname,'client')));
var client = new Twitter({
	consumer_key: process.env.TWITTER_CONSUMER_KEY,
	consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
	access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
	access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
	
});
console.log(process.env.TWITTER_CONSUMER_KEY);
console.log(process.env.TWITTER_CONSUMER_SECRET);
console.log(process.env.TWITTER_ACCESS_TOKEN_KEY);
console.log(process.env.TWITTER_ACCESS_TOKEN_SECRET);

client.stream('statuses/filter', {track: 'Cruz'}, function(stream) {
stream.on('data', function(tweet) {
    console.log(tweet.text);
  });
 
stream.on('error', function(error) {
    throw error;
  });
  
});
    server.listen(process.env.PORT ||3000,process.env.IP||"0.0.0.0",function(){
    var addr=server.address();
    console.log("Quick stack backend listening at",addr.address +":"+ addr.port);
});
