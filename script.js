$(window).on('scroll', function() {
    var scrollDistance = $(window).scrollTop();
    if(scrollDistance) {
        $('nav').addClass('black');
    } else {
        $('nav').removeClass('black');
    }

    $('section').each(function(i) {
        if($(this).position().top <= scrollDistance) {
            $('nav ul li a.active').removeClass('active');
            $('nav ul li a').eq(i).addClass('active');
        }
    })
});

$(document).ready(function(){
    $('body').bind('cut copy paste', function(e) {
        e.preventDefault();
    });

    $(".menu h4").click(function() {
        $("nav ul").toggleClass("active");
    });

    $("nav ul li a").click(function() {
        $("nav ul li a").removeClass("active");
    });

    $("#nav_profile").click(function() {
        $("#nav_profile").addClass("active");
    });

    $("#nav_about").click(function() {
        $("#nav_about").addClass("active");
    });

    $("#nav_studies").click(function() {
        $("#nav_studies").addClass("active");
    });

    $("#nav_skills").click(function() {
        $("#nav_skills").addClass("active");
    });

    $("#nav_experience").click(function() {
        $("#nav_experience").addClass("active");
    });

    $("#nav_contact").click(function() {
        $("#nav_contact").addClass("active");
    });
});