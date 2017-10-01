
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


};

