/**
 * Created by vignesh on 2/5/18.
 */


function submitRequest(){

    var mobileNo = $("#mobileNo").val();
    var name = $("#name").val();
    var Prefer = $("#Prefer").val();
    var sel1 = $("#sel1").val();




    var request ={
        mobileNo : mobileNo,
        name :name,
        prefer : Prefer,
        product :sel1

    }


    console.log("request",request)

    $.ajax({url: "/submit",
        data: request,


        success: function(result){


           $("#mobileNo").val("");
            $("#name").val("");
            $("#Prefer").val("New");
            $("#sel1").val("Washing machine");
    }});
}