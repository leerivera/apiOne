const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html')
})
app.post('/quotes', (req, res) =>{
    console.log("we posted")
})

app.listen(3000, function(){
    console.log('3000 you heard?!')
})