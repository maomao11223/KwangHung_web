$(document).ready(function(){
    // $(".nav-menu").click(function(e){
    //     // e.preventDefault();
    //     // $(".sidebar").toggleClass("menu-click");
        
    //     $("#sidebar").slideToggle(1000);  
    //     // if ($("#sidebar").css("display")=="none"){
    //     //     $("#sidebar").slideDown();
    //     // }else{
    //     //     $("#sidebar").slideUp();
    //     // }
    // })
    // $(".cross").click(function(){
    //     $("#sidebar").slideToggle(0);
    // })
    // $(".sm-style>li>a").click(function(e){
    //     e.preventDefault();
    //     $(this).siblings("ul").slideToggle(2000);
    // })
    
    //加入圖片遮罩特效
    
    $(".overlay-use a").mouseenter(function(){
        let title = $(this).parent("div").data("title");
        if(!$(this).children("div").length){
            $(this).append('<div class="overlay1"></div>');
        }
        let overlay=$(this).children(".overlay1");
        overlay.html('<p>'+title+'</p>');
        overlay.stop(true,true).fadeIn(200);
        $(this).children("img").addClass("yellow-border");
    })
    $('.overlay-use a').mouseleave(function () {
        
        let overlay = $(this).children('.overlay1');
        overlay.fadeOut(100);
        $(this).children("img").removeClass("yellow-border");
    })

    // 選單click特效

    
    
    




})