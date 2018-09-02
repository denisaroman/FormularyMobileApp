// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema

var detailsSchema = new Schema({
	Brand : String,
	Note : String,
	Link : String,
	Color: String
  });
  
  var contentSchema = new mongoose.Schema({
	Substance : String,
	Details : [detailsSchema]
  });
  
  var medicinesSchema = new mongoose.Schema({
	Name: String,
	Content: [contentSchema]
  });
  
  var subcategSchema = new mongoose.Schema({
	Title: String,
	MedicinesGroup: [medicinesSchema]
  });
  
  var listSchema = new mongoose.Schema({
	CategoryNumber: String,
	CategoryName: String,
	Subcategories: [subcategSchema]
  });
  
  var formularySchema = new mongoose.Schema({
	Number: Number,
	Chapter: String,
	List: [listSchema]
  });
  
  var Formulary = mongoose.model('Todo', formularySchema);

module.exports = Formulary;