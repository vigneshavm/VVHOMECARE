var homeLayout = "vvhome/index.html";
var nodemailer = require("nodemailer");
var _ = require('underscore');

var UIRoutes = function (app) {
    this.app = app;
};

module.exports = UIRoutes;

UIRoutes.prototype.init = function () {

    var app = this.app;


    //Init Routes
    app.get("/", function (req, res) {
        console.log("enter / call");
        res.render("vvhome/index.html", {layout: homeLayout});
    });

    app.get("/contact", function (req, res) {
        console.log("enter / contact.html");
        res.render("vvhome/contact.html", {layout: false});
    });
    app.get("/register", function (req, res) {
        console.log("enter / contact.html");
        res.render("vvhome/register.html", {layout: false});
    });


    app.get("/submit", function (req, res) {
        console.log("enter / submit.html",req.query);

        var singleQueue =req.query



         var from = "pandianthangamariappan@gmail.com";
         var to = "avmvignesh0207@gmail.com";
         var smtpTransport = nodemailer.createTransport({
         service: "Gmail",
         auth: {
         user: from,
         pass: "*******|||12312|||||G190993**|||12312|||||*******"
         }
         });



        var message ="Name:"+ "\t" +singleQueue.name + "\n";
        var message1 = "Mobile No:"+ "\t" + singleQueue.mobileNo + "\n";
        var message2 =      "Request for:"+ "\t" + singleQueue.prefer + "\n";
        var message3 =  "Prefer Product:"+ "\t" + singleQueue.product + "\n";




            smtpTransport.sendMail({
                from: from,
                to:to,
                subject: "REQUEST"+"\t"+new Date(),
                html: "Hi Team,"+"<br />"+"<br />"+
                    "Check below detail of the customer."+"<br />"+"<b>"+message+"<br />"+"</b>"+"<b>"+message1+"</b>" +
                    "<br />"+"<b>"+message2+"<br />"+"</b>"+"<b>"+message3+"</b> "+"<br />"+ "answer to the customer"
            }, function(error, response){
                if(error){
                    console.log(error);
                }else{
                    console.log("Message sent: " + response);
                }
            });





        res.render("vvhome/index.html", {layout: false});
    });

};

