requirejs.config({
    paths: {
        jquery: 'lib/jquery-3.1.0.min',
        highcharts: 'lib/highcharts'
    }
});

requirejs(['jquery','common'],function($,common){  

  $(document).ready(function () {
    //  user begin
    var wHeight=$(window).height();
    var cHeight=$(".container").height();
    var sHeight=$(".switching-mode").height();
    var bHeight=$(".book-immediately").height();
    if(cHeight+sHeight+bHeight>wHeight){
      $(".book-immediately").css("position","inherit");
      $(".switching-mode").css({
        position:"inherit",
        paddingLeft:"2%"
      });
      $(".m-hotel").css("paddingBottom",0);
    }    
    //user comment begin
    $(".close").on("click",function(){
       if(window.confirm("确实要删除吗？")){
            $(this).parent().parent().parent().parent().hide();
        }else{
            return;
        }     
    });

    //user card coupons
    $(".develop").on("click",function(){
     if($(this).next().css("display")=="none"){
        $(this).next().show();
        $(this).text("收缩");
      }else{
       $(this).next().hide();
       $(this).text("展开");
      }
    });

    
  });  

});