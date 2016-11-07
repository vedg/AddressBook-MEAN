var app = require("./appserver.js").create();
var ip = process.env.INTERNAL_IP;
var port = process.env.INTERNAL_PORT || 8080;

if (typeof ip === undefined) {
  console.log('INTERNAL_IP IS NOT AVAILABLE..');
  ip = "127.0.0.1";
}

var listening = function() {
  console.log('%s listening at %s %s ', app.name, app.url, new Date());
}

app.listen(port, ip, listening);
