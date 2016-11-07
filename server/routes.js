//Instantiate restify NPM Module
var restify = require('restify');

//Instaniate the Contact controller Objects 
var PersonManager = require('./controllers/PersonManager.js').getInstance();

// Defining Route Path
var PathManager = (function () {
    return {
        getBase: function () {
            return "/api";
        },
        getVersion: function () {
            return "v1";
        },
        getBasePath: function () {
            return this.getBase() + "/" + this.getVersion();
        },
        getPersonPath: function () {
            return this.getBasePath() + '/persons';
        }
    }
})();

var Routes = function (server) {

     //route to get all Contacts information
    server.get(PathManager.getPersonPath(), PersonManager.getpersons);

     //route to get Contact information by its ID
    server.get(PathManager.getPersonPath() + '/:id', PersonManager.getpersonbyid);

    //route to create new Contact
    server.post(PathManager.getPersonPath(), PersonManager.createPerson);

     //route to delete Contact information by its ID
    server.del(PathManager.getPersonPath() + '/:id', PersonManager.deleteperson);

}


 // Exposing Routes instance Object to Global Scope
module.exports.route = function(server) {
 return new Routes(server);
};
