$(function(){
    $(window).scroll(function(){
        var f=$(this).scrollTop();
        if(f>650){
            $(".fr").fadeIn(500);
        }else{
            $(".fr").css("display","none");
        }
    });
    $(window).scroll(function(){
        if ($(this).scrollTop()>=2000){//  当高度到2000像素执行事件
            $('.bg-img').css("display","block");
            $('.bg-img').animate({left:'-50px'},500);
            $('.bg-img').animate({left:'50px'},500);
            $('.bg-img').animate({left:'0'},500);
            $(window).unbind( "scroll" );  //  当高度到2000像素取消事件
        }
    });
    setTimeout(function() {
        $("#lj h1").fadeIn(1000);
    }, 1000);
    setTimeout(function() {
        $(".lj3").fadeIn(2000);
    }, 2000);

    setInterval(function(){
        $('.f-bg2').css('top','-100px');
        setTimeout(function(){
            $('.f-bg2').css('top','0');
        },800);
    },1600);

});
