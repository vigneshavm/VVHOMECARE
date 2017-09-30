
var homeLayout = "ustora/index.html";
var homeLayout1 = "ustora/shop.html";


var UIRoutes = function (app) {
    this.app = app;
};

module.exports = UIRoutes;

UIRoutes.prototype.init = function () {

    var app = this.app;


    //Init Routes
    app.get("/", function (req, res) {
        console.log("enter / call");
        res.render("ustora/shop.html", {layout: homeLayout1});
    });
    app.get("/", function (req, res) {
        console.log("enter / call");
        res.render("ustora/cart.html", {layout: homeLayout});
    });


};

