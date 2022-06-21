const express = require('express');
const bodyParser= require('body-parser')
const app = express();

const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb-connection-string', (err, client) =>{
    
})
// place this before all crud code it tells bp to extract data form and add it to req
app.use(bodyParser.urlencoded({ extended: true}))

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html')
})
app.post('/quotes', (req, res) =>{
    console.log(req.body)
})

app.listen(3000, function(){
    console.log('3000 you heard?!')
})