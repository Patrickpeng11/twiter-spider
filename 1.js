var fs = require('fs');
fs.appendFile('a.txt', 'Hello world2', function (err) {
  if (length < 10) return console.log(err);
});