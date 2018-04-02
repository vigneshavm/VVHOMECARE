var homeLayout = "vvhome/index.html";
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
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


 app.get("/washing-machines", function (req, res) {
        console.log("enter / contact.html");
        res.render("vvhome/washing-machines.html", {layout: false});
    });
    app.get("/refrigerators", function (req, res) {
        console.log("enter / contact.html");
        res.render("vvhome/refrigerators.html", {layout: false});
    });
 app.get("/air-conditioners", function (req, res) {
        console.log("enter / contact.html");
        res.render("vvhome/air-conditioners.html", {layout: false});
    });
    app.get("/purifier", function (req, res) {
        console.log("enter / contact.html");
        res.render("vvhome/purifier.html", {layout: false});
    });


    app.get("/submit", function (req, res) {

        var singleQueue =req.query;

        var message ="Name:"+ "\t" +singleQueue.name + "\n";
        var message1 = "Mobile No:"+ "\t" + singleQueue.mobileNo + "\n";
        var message2 =      "Request for:"+ "\t" + singleQueue.prefer + "\n";
        var message3 =  "Prefer Product:"+ "\t" + singleQueue.product + "\n";


        var mailAccountUser = 'avmvignesh0207@gmail.com';
        var mailAccountPassword = 'Vikki.02071121701';

        var fromEmailAddress = mailAccountUser;
        var toEmailAddress = 'pandianthangamariappan@gmail.com';

        var transport = nodemailer.createTransport(smtpTransport({
            service: 'gmail',
            auth: {
                user: mailAccountUser,
                pass: mailAccountPassword
            },
            tls: { rejectUnauthorized: false }
        }));

        var mail = {
            from: fromEmailAddress,
            to: toEmailAddress,
            subject: "hello world!",
            text: "Hello!",
            html: "Hi Team,"+"<br />"+"<br />"+
                    "Check below detail of the customer."+"<br />"+"<b>"+message+"<br />"+"</b>"+"<b>"+message1+"</b>" +
                    "<br />"+"<b>"+message2+"<br />"+"</b>"+"<b>"+message3+"</b> "+"<br />"+ "answer to the customer"
        }

        transport.sendMail(mail, function(error, response){
            if(error){
                console.log(error);
            }else{
                console.log("Message sent: " + response.message);
            }

            transport.close();
        });


        res.render("vvhome/index.html", {layout: false});
    });

};

