const express = require ('express');
const mongoose  = require('mongoose');
const Appointment = mongoose.model('appointment')
var routers = express.Router();

// routers.get('/',(req,res) =>{
//   res.render('appointment',{viewTitle: "Please enter details"});
// });


routers.get('/',(req,res) =>{
  res.render('blog',{Title: "Please enter details"});
});

module.exports = routers;