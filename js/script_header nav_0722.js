$(document).ready(function(){
// 導覽列開關 開始
    let $menu = $(".nav-menu"),
        $sideNav = $(".nav"),
        $btncancel = $("#btnCancel");
    
    $($menu).click(function(){
        $sideNav.toggleClass("active");
    });

    $($btncancel).click(function(){
        $sideNav.removeClass("active");
    });
    $('.sidenav > li').click(function(){
        $sideNav.removeClass("active");
    });

    

    //  品牌手風琴 開始
    $('.sideBrand > li > ul').hide();
    $('.searchLanguage > li > ul').hide();


    $('.sideBrand > li > ul').click(function (event) {
        event.stopPropagation();
    });
    $('.searchLanguage > li > ul').click(function (event) {
        event.stopPropagation();
    });

    $('.sideBrand > li').click(function () {
        $(this).find('ul').slideToggle().parent().siblings().find('ul').slideUp();
    });
    $('.searchLanguage > li').click(function () {
        $(this).find('ul').slideToggle().parent().siblings().find('ul').slideUp();
    });


    document.addEventListener("click",clickHidden);
    // 品牌手風琴 結束

});