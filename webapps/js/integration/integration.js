

$(document).ready(function() {
    $('.t-menu-link').click(function (e) {
        handlePMLinkClick(this, e);
    })
})


function women () {


    $.ajax({
        url: "/women",
        timeout:120000,
        method: "get",
        data: "",
        success: function (result) {
            console.log(result,"hihi")
            if (result) {
                console.log("here")
                $('#menu_body_details').html(result)
            }
            else {
                console.log("Error in Ajax success callback")
            }
        },
        error: function(){
            console.log("Error Found Here")
        }
    });
}
function kids () {

    $.ajax({
        url: "/kids",
        timeout:120000,
        method: "get",
        data: "",
        success: function (result) {
            if (result) {
                console.log("here")
                $('#menu_body_details').html(result)
            }
            else {
                console.log("Error in Ajax success callback")
            }
        },
        error: function(){
            console.log("Error Found Here")
        }
    });
}
function men () {

    $.ajax({
        url: "/men",
        method: "get",
        data: "",
        success: function (result) {
            if (result) {
                console.log("here")
                $('#menu_body_details').html(result)
            }
            else {
                console.log("Error in Ajax success callback")
            }
        },
        error: function(){
            console.log("Error Found Here")
        }
    });
}
function newArrival(urlName,more) {
    
    if(more == 1){
        $('#drop_down1').addClass('highlight');
    }
    $("#dropdown_options").hide()

    console.log("urlName", urlName);
    $.ajax({
        url: "/newArrival",
        method: "get",
        data: "",
        success: function (result) {
            if (result) {
                $('#menu_body_details').html(result)
            }
            else {
                console.log("Error in Ajax success callback")
            }
        },
        error: function(){
            console.log("Error Found Here")
        }
    });
}



// Handle click event of primary sub menus
function handlePMLinkClick(obj,event){
    $('.t-menu-link').removeClass('t-menu-active')
    $(obj).addClass('t-menu-active');

    // getSubMenus(obj,event);


}