var select=1;
var setNum=1;
var setDist=0
$(document).ready(function(){
    $("#select-picture").empty();
    for(var i=1;i<=3;i++){
        $("#select-picture").append
        (
            "<div id='div" + i + "' class='round'><img src='./images/page4/post0"+i+".png'</div>"
        );
        $("#div" + i).on("click", { num: i }, fnChange1);
    };
    iconShow();
    // 按下往左鈕執行fnPrev函式
    $("#btnPrev").on("click", fnPrev);
    // 按下往右鈕執行fnNext函式
    $("#btnNext").on("click", fnNext);




});
    function fnChange1(a) {
        select = a.data.num;
        // 取得選取的圖片編號並組成完成圖檔
        var filename = "./images/page4/post0" + a.data.num + ".png"
        $("#select-picture img").removeClass("showStyle");
        // 顯示圖片
        $("#bigImg").attr("src", filename);
        // 呈現淡出動畫
        $("#bigImg").hide().fadeIn(1000);
        $("#div" + select).addClass("showStyle");
    };
    // 判斷是否又要出現左右按鈕
    function iconShow(){
        if (setNum <= 1) {
            $("#btnNext").attr("style", "display:block;");
            $("#btnPrev").attr("style", "display:none;");
        } else if (setNum >= 2) {
            $("#btnPrev").attr("style", "display:block;");
            $("#btnNext").attr("style", "display:none;");
        } else {
            $("#btnPrev").removeAttr("style");
            $("#btnNext").removeAttr("style");
        }
    };
    // 往左鈕事件處理函式
    function fnPrev(){
        setNum-=1;
        setDist+=115;
        $(".recommend-product-list").css("left",setDist+"px");
        iconShow();
    }
    function fnNext(){
        setNum+=1;
        setDist-=115;
        $(".recommend-product-list").css("left",setDist+"px");
        iconShow();
    }
