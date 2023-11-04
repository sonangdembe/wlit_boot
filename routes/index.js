var express = require('express');
var router = express.Router();
// var books = require('../resources/books');
const Book = require('../models/book');
/* GET home page. */


router.get('/', async function (req, res, next) {
  const books = await Book.find()
  res.render('index', { title: 'Book App', bookList: books });
});
module.exports = router;