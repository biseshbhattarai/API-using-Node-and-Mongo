import { DocumentQuery } from 'mongoose';


var mongoose = require('mongoose');


//Genre Schema
var bookSchema = mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    genre:{
        type:String,
        required:true

    },
    description:{
        type:String
    },
    publisher:{
        type:String
    },
    pages:{
        type:String
    },
    buy_url:{
        type:String
    },
    create_date:{
        type:Date,
        default:Date.now
    }
});

var Book = module.exports = mongoose.model('Book', bookSchema)

module.exports.getBooks = function(callback, limit){
    Book.find(callback).limit(limit);
}

module.exports.getBookById = function(id, callback){
    Book.findById(id, callback);
}

module.exports.addBook = function(book, callback){
    Book.create(book, callback);
}



module.exports.updateBook = function(id, book,options, callback){
    var query = {_id:id};
    var update = {
        title  : book.title,
        genre : book.genre,
        description : book.description,
        publisher : book.publisher,
        pages : book.pages,

   
    }
    Genre.findOneAndUpdate(query,update,options,genre, callback);
}


module.exports.Deletebook = function(id, callback){
    var query = {_id:id};
    Book.remove(query, callback);
}

