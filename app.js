const express = require ('express');
const app = express();
const path = require('path');
const cors = require("cors");
var Engine = require('engine');
var engine = new Engine();
const mongoose = require('mongoose');
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
});

//importing routes
const appointmentcontroller = require('./controllers/appointmentcontroller');

//blog route
const blogcontroller = require('./controllers/blogcontroller');

//middleware
app.use('/Appointment', appointmentcontroller);
app.use('/Blog',blogcontroller);

// app.use(bodyParser.urlencoded({
//   extended: true
// }));

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public')));
console.log(path.join(__dirname, '/public'));
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

let port = process.env.PORT || '3000';
app.listen(port, () => {
  console.log('Express server started');
});

// Its done
// okay, but the picture? okk wait