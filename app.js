const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname))
app.get('/', function(request, response){
    response.sendFile(__dirname + '/index.html');
});
