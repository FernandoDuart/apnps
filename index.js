const express = require('express')
const app = express()

app.get('/', function(req,res){
     
     res.send("ola mundo")
     

})
app.get('/msg', function(rec,res){
     res.send("Essa mensagem é automatica")
})

app.get('/layout', function(rec,res){
     res.send("Esse é o novo layout")
})

app.listen(3000, function(){

     console.log("conexão inicializada")


})
