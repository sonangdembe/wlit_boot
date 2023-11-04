var express = require('express'); //require express
const Book = require('../models/book')
var router = express.Router(); // we are stating routing from here
var books = require('../resources/books');

/* GET home page. */
router.get('/add', function(req, res, next) { //router.get 
  //render - help us to display
  res.render('addBooks', { title: 'Add Book' });  //this is the content that  is to be display
});

// router.post('/save',function(req,res,next){
//     books.push({...req.body,_id:`00${books.length +1 }`})
//     res.redirect('/')
// })
router.post('/save', async function (req, res) {
  await Book.insertMany({...req.body})
  res.redirect('/');
})
// //for edit purpose
// router.get('/edit/:_id', function(req, res, next){
//   const book = books.find((book)=>book._id === req.params._id)
//   res.render('editBooks', {title: "Edit Books", book})
// })
// module.exports = router;


// router.post('/saveEdited/:_id', function(req, res, next){
//   const currIndex = books.findIndex((book)=>book._id === req.params._id)
//   books.splice(currIndex, 1, {...req.body, _id: req.params._id})
//   res.redirect('/')
// })
// // router.get('/delete/:_id',function(req,res,next){
// //   res.render('deleteBooks',{title: 'delete Books'})
// // })


// // ______________________for delete----------------
// router.get('/delete/:_id', function(req, res, next) {
//   const delIndex = books.findIndex((book) => book._id === req.params._id);
//   if (delIndex !== -1) {
//       books.splice(delIndex, 1);
//       console.log(`Book with _id ${req.params._id} deleted`);
//   } else { console.log(`Book with _id ${req.params._id} not found`); }

//   res.redirect('/');
// });
// module.exports = router;