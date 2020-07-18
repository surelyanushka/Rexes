const express = require ('express');
const app = express();
const path = require('path');
const cors = require("cors")
const mongoose = require('mongoose');
var Engine = require('engine');
var engine = new Engine();
require('dotenv/config');
const bodyParser= require('body-parser');
require('./models/appointment.model');


app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({
  extended: true
}));

//connect to db
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
},
 () => console.log('connected to Db')
);

//importing routes
const appointmentcontroller = require('./controllers/appointmentcontroller');
const blog = require('./controllers/blog');

//middleware
app.use('/Appointment', appointmentcontroller);
app.use('/Blog',blog);

// app.use(bodyParser.urlencoded({
//   extended: true
// }));

app.use(bodyParser.json());
app.use(express.static(__dirname, + '/public'));
app.use(cors());

//views
// view engine setup
app.set('views', (__dirname, 'views'));
app.set('view engine', 'ejs');



//index page
app.get('/', function(req,res){
  res.render('index')
});

// app.get('/blog',(req,res) =>{
//   res.render('blog',{viewTitle: "Please enter details"});
// });





//Start listening
app.listen(4200, () => {
  console.log('Express server started');
});