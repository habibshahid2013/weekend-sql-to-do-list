
const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./modules/pool')

//App server is created 
const app = express();

//Express will know where to find all of our public files "Client-side"
app.use(express.static('./server/public'));


//haven't defined URL yet
//Listen for request coming to URL
//GET
app.get('/', function (req, res) {
    console.log('ready to send back something');
    
    console.log('Test req.body', req.body );
    

    res.send('in all due time it will make sense');
});

//POST 
app.post('/', function (req, res) {
    console.log('Testing App.POST functionality');

    res.send('This is where we will send back info');
    
});

//listen for requests
const port = 5000;
app.listen(port, function (){

    console.log('App is up and running on local host: 5000 🤮');
    
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));