const express = require ('express');
const mongoose  = require('mongoose');
const { urlencoded } = require('body-parser');
const Appointment = mongoose.model('appointment')
var router = express.Router();


router.get('/',(req,res) =>{
  res.render('appointment',{viewTitle: "Please enter details"});
});


// router.get('/',(req,res) =>{
//   res.render('blog',{Title: "Please enter details"});
// });

router.post('/',(req,res) =>{
  // console.log(req.body)
  insertRecord(req, res);
});

function insertRecord(req, res){
  var appointment = new Appointment();
  appointment.date = req.body.date;
  appointment.name = req.body.name;
  appointment.mobile = req.body.mobile;
  appointment.time = req.body.time;
  appointment.save((err, doc) => {
    if(!err)
      res.redirect('appointment/submit');
    else{
      console.log('Error during insertion: '+ err);}
  });
  // router.get('/submit', urlencodedbodyParser, (req,res) =>{
  //   res.render("submit",{data: req.body});
    
  // });
  
}
router.get('/submit',(req,res) =>{
  // res.json('form submitted');
  Appointment.find((err, docs) =>{
    if (!err){
      res.render("submit", {
        list: docs
      });
    }
    else {
      console.log('Error in retrieving list'+ err)
    }
  })
});

// function handleValidationError(err, body){
//   for(field in err.errors)
//   {
//     switch(err.errors[field].path){
//       case 'date':
//         body['dateError'] = err.errors[field].message;
//         break;
//       case 'name':
//         body['nameError'] = err.errors[field].message;
//         break;
//       default:
//         break;
//     }
//   }
// }

module.exports = router;