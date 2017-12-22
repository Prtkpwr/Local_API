var express = require('express');
var app = express();

//make this json file as database
var data = require('./MainJSON.json');

//first route Page
app.get('/', function (req, res) {
    res.send("Hello!, Welcome to my API. Use '/data' to see all data, use '/data/Electronics' or '/data/Clothes' or '/data/Furniture' or '/data/Cupboards' to see data inside perticular section");
})

//getting all data
app.get('/data', function (req, res) {
    res.send(data);
})
// request parameter
app.get('/data/:name', function (req, res) {
    console.log(req.params.name);
    var foundUser = 'no data found';

    for (u in data) {
        if (data[u].name == req.params.name)
            foundUser = data[u]
    }
    console.log(foundUser);
    res.send(foundUser);
});
//linsitening on a port
app.listen(3000, function () {
    console.log('Listening on port 3000!');
});
