$(document).ready(function(){
    $(window).on("scroll", function() {
        var nav = document.querySelector('nav');
        if (window.scrollY > 30) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    $('a').on("click", function(e){
        let sid = $(this).attr('menu_sid');
        let position_top = 0;
        switch (sid) {
            case "1":
                position_top = $("#menu1").offset().top;
                break;
            case "2":
                position_top = $("#menu2").offset().top;
                break;
            default:
                position_top = $("#menu3").offset().top;
                break;
        }
        $('html, body').animate({
            scrollTop: position_top
          }, 800);
    });
});
