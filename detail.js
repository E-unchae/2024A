$(document).ready(function(){
    $(".navbar-link").on("click", function(){
        $(".active").removeClass("active");
    });
    $('body').on("scroll", function() {
        var nav = document.querySelector('nav');
        if (window.scrollY > 30) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
    
    $('a').on("click", function(e){
        let sid = $(this).attr('menu_sid');
        if(sid){
            location.href="./index.html";
        }
    });
});
