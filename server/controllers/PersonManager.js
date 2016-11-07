
//Instantiate mongoose NPM Module
var mongoose=require('mongoose');

//Instantiate person model
var Person = require('../models/personmodel.js');

// Create Constructor
var PersonManager = function() {};

/**
 * @parameters : None
 * Description : Get all person records from database
 * GET: Persons
 * Host: localhost
 * Content-Type:String  
 **/
PersonManager.prototype.getpersons = function (req, res, next) {

   Person.find({}, function (error, personinfo) {
            res.send(personinfo);
        });
   
}

/**
* @parameters : FullName,MobileNumber,Email,Home
* Description: Create Person by getting all parameters
* POST: Persons
* Host: localhost
* Content-Type:String  
*/
PersonManager.prototype.createPerson = function (req, res, next) {
   console.log("here");
    var requestbodyObj = req.body;
	console.log(requestbodyObj);
    var now = new Date();
    var personObj = new Person();
   
    for (key in requestbodyObj) {
	personObj[key] = requestbodyObj[key];
    }
    try {
        //Save personObj into MongoDB
        personObj.save(function (err) {
            if (!err) {
                console.log('Person saved into database!');
            }
            else {
              console.log(err);
            }

        });
    }
    catch (error) {
        logger.warn(error);

        logger.info(JSON.stringify(err));
        return next();
    }
    res.send();
}

/**
* @parameters : id,
* descripion: Delete Person Record by passing ID
* POST: Persons
* Host: localhost
* Content-Type:String  
*/
PersonManager.prototype.deleteperson = function (req, res, next) {

   var personid = req.params.id;

  //get person by its ID and remove from the database
  Person.remove({id:personid}, function (error, personinfo) {
            res.send(personinfo);
        });
}

/**
* @parameters : id,
* descripion: Get Person Record by passing ID
* GET: Person
* Host: localhost
* Content-Type:String  
*/
PersonManager.prototype.getpersonbyid = function (req, res, next) {

   var personid = req.params.id;

  //We can use either find  or findById
  Person.find({id:personid}, function (error, personinfo) {
            res.send(personinfo);
        });
}

//make this module available for global scope
module.exports.getInstance = function() {
 return new PersonManager();
};

