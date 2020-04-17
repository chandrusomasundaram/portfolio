$(window).on('scroll', function() {
    if($(window).scrollTop()) {
        $('nav').addClass('black');
    } else {
        $('nav').removeClass('black');
    }
})

$(document).ready(function(){
    $(".menu h4").click(function() {
        $("nav ul").toggleClass("active");
    })

    $("nav ul li a").click(function() {
        $("nav ul li a").removeClass("active");
    })

    $("#nav_profile").click(function() {
        $("#nav_profile").addClass("active");
    })

    $("#nav_about").click(function() {
        $("#nav_about").addClass("active");
    })

    $("#nav_studies").click(function() {
        $("#nav_studies").addClass("active");
    })

    $("#nav_skills").click(function() {
        $("#nav_skills").addClass("active");
    })

    $("#nav_experience").click(function() {
        $("#nav_experience").addClass("active");
    })

    $("#nav_contact").click(function() {
        $("#nav_contact").addClass("active");
    })
})