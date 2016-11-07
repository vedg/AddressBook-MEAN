//Schema for person Contacts 
var mongoose=require('mongoose');
var Schema = mongoose.Schema;
 
var PersonSchema = new Schema({
  "FullName":String,
  "MobileNumber":Number,
  "Email":String,
  "Home":Number
});

module.exports=mongoose.model("persons", PersonSchema);


















































/*var mongoose=require('mongoose');
var Schema = mongoose.Schema;
 
var BirdSchema = new Schema({
   title: String,
  description: String,  
  additionalProperties: Boolean,
  properties: {
    name: String,
    family: String,
    continents:[ {      
      description: String,
      minItems: Number,
      items: String,
      uniqueItems: Boolean
    }],
    added: String,
    visible:String
  }
});

module.exports=mongoose.model("birds", BirdSchema);*/
