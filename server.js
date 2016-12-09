var express=require('express');
var http=require('http');
var path=require('path');
var bodyParser=require('body-parser');
var router= express();
var server= http.createServer(router);
var cmd = require("node-cmd");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

var Twitter = require('twitter');
router.use(express.static(path.resolve(__dirname,'client')));
var client = new Twitter({
	consumer_key: process.env.TWITTER_CONSUMER_KEY,
	consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
	access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
	access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
	
});
//console.log(process.env.TWITTER_CONSUMER_KEY);
//console.log(process.env.TWITTER_CONSUMER_SECRET);
//console.log(process.env.TWITTER_ACCESS_TOKEN_KEY);
//console.log(process.env.TWITTER_ACCESS_TOKEN_SECRET);

<<<<<<< Updated upstream
client.stream('statuses/filter', {track: 'Cruz'}, function(stream) {
stream.on('data', function(tweet) {
    console.log(tweet.text);
  });
 
stream.on('error', function(error) {
=======
client.stream('statuses/filter', {track: 'DonaldTrump'}, function(stream) {
  
  //setTimeout(funtion(client){client.close();},4000)
  //server.setTimeout(3000, console.log("a"));
  /*server.setTimeout(function() {
       console.log("timeout");
       process.exit;
    }, 3000);*/
  //var numOfTwitte = 0;
  stream.on('data', function(tweet) {
    
    //console.log(tweet.text);
    
    var fs = require('fs');
    fs.appendFile('/home/ubuntu/workspace/test.txt', tweet.text, function (err) {
      //numOfTwitte ++;
      console.log(tweet.text);
      if (err){ 
        return console.log(err);
      }
      
      // else if(numOfTwitte > 10){
      //   //cmd.run('make');
      //   stream.exit;
      //   cmd.get('/home/ubuntu/workspace/cppsrc/markov /home/ubuntu/workspace/test.txt 4',function(data){
      //   console.log(data);
      //   cmd.run('rm test.txt');
       
      //   });
       
      // }
    });
   // 
  });
   
  
  
  stream.on('error', function(error) {
>>>>>>> Stashed changes
    throw error;
  });

});
//server.setTimeout(3000, console.log("a"));

/*
var cmd = require("node-cmd");
cmd.run('make');
cmd.get('./markov test.txt 4',function(data){
  console.log(data);
});
<<<<<<< Updated upstream
    server.listen(process.env.PORT ||3000,process.env.IP||"0.0.0.0",function(){
    var addr=server.address();
    console.log("Quick stack backend listening at",addr.address +":"+ addr.port);
});
=======
cmd.run('make clean');*/

router.get("/bananas", function(req, res){
  res.json({from:"the server", time: new Date()});
});

router.post("/bananas", function(req, res){
  console.log(req.body);
  res.json({body: req.body});
});

server.listen(process.env.PORT ||3000,process.env.IP||"127.0.0.1:8080",function(){
    var addr=server.address();
    console.log("Quick stack backend listening at",addr.address +":"+ addr.port);
});

>>>>>>> Stashed changes
