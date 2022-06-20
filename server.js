const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send('Boo ya!')
})


app.listen(3000, function(){
    console.log('3000 you heard?!')
})