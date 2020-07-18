const mongoose  = require('mongoose');

var AppointmentSchema = new mongoose.Schema({
  date:{
    type: String,
    required: 'This field is required'
  },
  name:{
    type: String,
    required: 'This field is required'
  },
  mobile:{
    type: String
  },
  time:{
    type: String
  }
});
// module.exports = mongoose.model('appointment', AppointmentSchema);

mongoose.model('appointment', AppointmentSchema);