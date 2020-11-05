const express = require('express')
const app = express()

app.get('/', function(req,res){
     
     res.send("ola mundo")
     

})
app.get('/mensagem', function(rec,res){
     res.send("Essa mensagem é automatica")
})

app.listen(3000, function(){

     console.log("conexão inicializada")


})