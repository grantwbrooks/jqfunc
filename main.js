$(document).ready(function(){
    $(".click button").click(function(){
        $(".click h1").slideUp();
    });

    $(".hide button").click(function(){
        $(".hide h1").hide();
    });

    $(".show button").click(function(){
        $(".hide h1, .click h1").show();
    });

    $(".toggle button").click(function(){
        $(".toggle h5").toggle("slow");
    });

    $(".slidedown li").click(function(){
        if ($(".slidedown ul li ul li").is(":hidden")) {
            $(".slidedown ul li ul li").slideDown("slow");
        }
        else{
            $(".slidedown ul li ul li").hide();
        }
    });

    $(".slideup li").click(function(){
        if ($(".slideup ul li ul li").is(":hidden")) {
            $(".slideup ul li ul li").slideDown("slow");
        }
        else{
            $(".slideup ul li ul li").slideUp("slow");
        }
    });

    $(".slidetoggle li").click(function(){
        $(".slidetoggle ul li ul li").slideToggle("slow");
    });

    $(".fadein button").click(function(){
        $(".fadein img").fadeIn(3000);
    });

    $(".fadeout button").click(function(){
        $(".fadein img").fadeOut(3000);
    });

    $(".addclass button").click(function(){
        $(".addclass").addClass("blueback");
    });

    $(".before button").click(function(){
        $(".before h1").before("Stuff");
    });

    $(".after button").click(function(){
        $(".after h1").after("Stuff");
    });

    $(".append button").click(function(){
        $(".append h1").append(" Stuff");
    });

    $(".html button").click(function(){
        var x = $(".html h1").html();
        $(".html h1").append(x);
    });

    $(".html h4").click(function(){
        $(".html h1").html("<h3>New HTML</h3>");
    });

    
    $("form").submit(function(){
        var y = $("#entrytext").attr("value", "");
        console.log(y);
        $(".attr h1").append(y);
        return false;
    });

    // $(".attr #button2").click(function(){
    //     $(".attr #entrytext").attr("value","Grant");
    // })

    // $("input").submit(function())





});