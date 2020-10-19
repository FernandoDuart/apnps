const express = require('express')
const app = express()

app.get('/', function(req,res){
     
     res.send("ola mundo")
     

})


app.listen(3000, function(){

     console.log("coneçao iniciada na porta 3000")


})