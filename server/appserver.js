var restify = require('restify');
var url = require('url');
var querystring = require('querystring');
var env = process.env.NODE_ENV || 'local';
var config = require('./config/config.js')[env];
var mongoose = require('mongoose');
var routes = require('./routes.js');
var server;


var AppServer = function () {
     mongoose.connect(config.dbUri);
    this.server = restify.createServer();
    this.server.use(restify.bodyParser());
    this.server.use(restify.fullResponse());
    this.server.use(restify.acceptParser(this.server.acceptable));
    this.server.use(restify.authorizationParser());
    this.server.use(restify.dateParser());
    this.server.use(restify.queryParser());
    this.server.use(restify.conditionalRequest());
    this.server.use(restify.multipartBodyParser());
    this.server.use(restify.throttle({
        burst: 100,
        rate: 50,
        ip: true
    }));
    routes.route(this.server);

    return this.server;
}

module.exports.create = function() {
 return new AppServer();
};
