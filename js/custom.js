$(document).ready(function() {

    
    alert("hi...welcome to my site:)))");


    $("#home-btn").one("focus",function(e){
       $(".box-p").append("<p class=p-home>She ipsum dolor sit amet consectetur adipisicing elit. Molestiae atque modi blanditiis unde, impedit fugiat debitis qui eos alias similique dolore!Adipisci id nulla tempora debitis earum quia velit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>");
    });


    // ---------------------------------------------------------

    $("#input").on("click",function(e){
        $(this).css("background-color", "rgb(185, 185, 185)");
    });
    $("#input").on("focusout",function(e){
        $(this).css("background-color", "white");
    });


    $("#input2").on("click",function(e){
        $(this).css("background-color", "rgb(185, 185, 185)");
    });
    $("#input2").on("focusout",function(e){
        $(this).css("background-color", "white");
    });


    $("#input3").on("click",function(e){
        $(this).css("background-color", "rgb(185, 185, 185)");
    });
    $("#input3").on("focusout",function(e){
        $(this).css("background-color", "white");
    });


    $("#input4").on("click",function(e){
        $(this).css("background-color", "rgb(185, 185, 185)");
    });
    $("#input4").on("focusout",function(e){
        $(this).css("background-color", "white");
    });


    $("#input5").on("click",function(e){
        $(this).css("background-color", "rgb(185, 185, 185)");
    });
    $("#input5").on("focusout",function(e){
        $(this).css("background-color", "white");
    });



    // -----------------------------------------------------
    
    var x = 0

    $("#butt").click(function(){
        alert("thank you,send your information");      
    });



});