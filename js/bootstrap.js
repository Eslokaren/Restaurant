$( document ).ready(function() {
    new WOW().init();
});

$(function() {
    var selectedClass = "";
    $(".filter").click(function(){
    selectedClass = $(this).attr("data-rel");
    $("#gallery").fadeTo(100, 0.1);
    $("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
    setTimeout(function() {
    $("."+selectedClass).fadeIn().addClass('animation');
    $("#gallery").fadeTo(300, 1);
    }, 300);
    });
});

$('.datepicker').pickadate();

window.onscroll = function() {
    $menu = document.querySelector('#menu')
    var y = window.scrollY;
    if(y>300){
       $menu.classList.add('bg-dark')
    }
    else{
        $menu.classList.remove('bg-dark')
    }
};
