

var express = require('express');

var app = express();
var expressLayouts = require('express-ejs-layouts');




app.set ('views', __dirname + '/views');
app.use(express.static(__dirname + '/webapps'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


app.set('layout', './layout/myIndex.html');
app.use(expressLayouts);


//Global variable

//ExpressJS middleware


var hostPort = Number(8888);

app.listen(hostPort, function () {
    console.log("Server running in port :" + hostPort);

});



var WebRoutes = require("./routes/ui-routes.js");
var webRoutes = new WebRoutes(app);
webRoutes.init();

