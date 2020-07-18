const express = require ('express');

var routers = express.Routers();

routers.post('/appointment',(req,res) => {
  console.log(req.body)
 });
  