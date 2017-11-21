var homeLayout = "vvhome/index.html";



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

};

