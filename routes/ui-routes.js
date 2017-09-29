
var homeLayout = "layout/home-layout.html";


var UIRoutes = function (app) {
    this.app = app;
};

module.exports = UIRoutes;

UIRoutes.prototype.init = function () {

    var app = this.app;


    //Init Routes
    app.get("/", function (req, res) {
        console.log("enter / call");
        res.render("dress_collection/home.html", {layout: homeLayout});
    });


};

