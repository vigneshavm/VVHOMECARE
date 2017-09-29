
function  initializePageRouter(){
    var routes = {
        '/': loadHomePage

    };
    var router = Router(routes);
    if(window.location.pathname == '/'){
        router.init('/');
    }
}
