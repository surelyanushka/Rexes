const express = require ('express');
const app = express();
const path = require('path');
const cors = require("cors");
const mongoose = require('mongoose');
const bodyParser= require('body-parser');

var routers = express.Router();

// router.get('/',(req,res) =>{
//   res.render('appointment',{viewTitle: "Please enter details"});
// });


routers.get('/',(req,res) =>{
  res.render('blog',{Title: "Please enter details"});
});


// res.status(200).json({
//   success: true,
//   message: "API",
// })


module.exports = routers;