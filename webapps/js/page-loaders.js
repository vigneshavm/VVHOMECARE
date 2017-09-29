
function loadHomePage(){

    var $layoutBody = $('#bodyContent');
    var action = '/';
    var data = {
        isAjax:true
    };
    tzAjax(action,'GET',data,function(result){
        $layoutBody.html(result)
    })
}



