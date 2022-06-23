

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://nick:<password>@cluster0.1y9w1mw.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


const express = require('express');
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express();



const connectionString = 'mongodb+srv://nick:password3177@cluster0.1y9w1mw.mongodb.net/test?retryWrites=true&w=majority'


MongoClient.connect(connectionString, { useUnifiedTopology: true})
.then(client => {
    console.log('database is connected like 4')
    const db = client.db('star-wars-quotes')
    const quotesCollection = db.collection('quotes')

    app.set('view engine', 'ejs')
    app.use(bodyParser.urlencoded({ extended: true}))

    app.get('/', (req, res) =>{
        // res.sendFile(__dirname + '/index.html')
        db.collection('quotes').find().toArray()
         .then(quotes => {
            res.render('index.ejs', { quote: quotes})
         })
         .catch(error => console.error(error))
    })
    
     app.post('/quotes', (req, res) => {
         quotesCollection.insertOne(req.body)
           .then(result => {
             res.redirect('/')
           })
           .catch(error => console.error(error))
      })
      app.listen(3000, function(){
        console.log('3000 you heard?!')
    })
})
.catch(console.error)
// place this before all crud code it tells bp to extract data form and add it to req





