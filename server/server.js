const express = require('express');

//App server is created 
const app = express();

//Express will know where to find all of our public files "Client-side"
app.use(express.static('./server/public'));

//listen for requests
const port = 5000;
app.listen(port, function (){

    console.log('App is up and running on local host: 5000 🤮');
    
});