//点击页面二手房跳转页面，提示登录或者注册
$("#actor").click(function(){
   alert("请您先登录或者注册");
});
//点击登录显示隐藏的登录界面
$("#log").click(function(){
   $(".modal").css("display","block");
});

//点击退出登录界面隐藏登录界面
$(".alert1").click(function () {
    $(".modal").css("display","none");
});
$(".alert2").click(function () {
    $(".sign").css("display","none");
});
//登录界面
$(function(){
    //第一个模块用户登录
    var uname = null;
    var upwd = null;
   //1.创建二哥全局变量保存用户名和密码
    //2.     为登录信息按钮绑定点击事件
$("#bt-login").click(function(){
    // 3.获取用户名和密码
    var u = $("#uname").val();
    var p = $("#upwd").val();
    console.log(u);
    console.log(p);
    // 4.发送ajax请求
    $.ajax({
        type:'GET',
        url:'data/login.php',
        data:{uname:u,upwd:p},
        success:function(data) {
            console.log(data);
            if (data<0) {
                $("p.alert").html("用户名或密码有误！");
            } else {
                $(".modal").hide();
                location.href="second-handhouse.html";
                alert("欢迎"+u+"来到武汉链家网二手房");

            }
          },
        error:function(){
            alert("响应消息有错！请检查网络");
        }
    });
    // 5.发送隐藏登录信息 欢迎回来??
    // 6.将用户名和密码保存全局变量中
    // 7：如果请求失败提示
});
});

//点击注册界面跳到隐藏的注册界面
$("#sig").click(function(){
    $(".sign").css("display","block");
});
//注册界面
$(function(){
    //创建3个全局变量保存注册名，密码，收货人电话
   var uid="";
   var uip="";
   var uphone="";
    //2.为提交注册信息按钮绑定点击事件
    $("#login-id").click(function(){
        //获取3个全局变量值
        var d = $("#uid").val();
        var p = $("#uip").val();
        var e = $("#uphone").val();
        //4.发送ajax请求
    $.ajax({
        type:'GET',
        url:'data/login02.php',
        data:{uid:d,uip:p,uphone:e},
        success:function(data){
            var os=parseInt(data);
            if(os>0){
                $(".sign").css("display","none");
                location.href="second-handhouse.html";
                alert("欢迎"+d+"来到武汉链家网");
            }
            else{
                $("p.login").html("请输入正确!用户名和密码,手机号码");
            }
        },
        error:function(){
            alert("响应消息有错，请检查网络");
        }
    });
    })
});
//注册界面验证判断
//用户名
$("#uid").blur(valiuid);
function valiuid(){
    var uid = $("#uid").val();
    var message="";
    var reg=/^[a-zA-Z]{1,30}$/;
    if(!reg.test(uid)){
        $("#uid").prev("span").html("只能输入1-30个以字母开头").css("color","red");
    }
    else{
        $("#uid").prev().html("下一步").css("color","green");
    }
}
//密码
$("#uip").blur(valiuip);
function valiuip(){
    var uip=$("#uip").val();
    var mess="";
    var re=/^(\w){6,20}$/;
    if(!re.test(uip)){
        $("#uip").prev().html("只能输入6-20个字母、数字、下划线").css("color","red");
    }
    else{
        $("#uip").prev().html("下一步").css("color","green");
    }
}
//手机号码
$("#uphone").blur(valiPhone);
function valiPhone(){
    var phone = $("#uphone").val();
    var flag =false;
    var message="";
    var myreg=/^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/;
    //13开头0-9的一位数字0-9加8位数字
    if(!myreg.test(phone)){
        $("#uphone").next().html("必须以数字开头，除数字外，可含有“-”  ").css("color","red");
    }else{
        $("#uphone").next().html("下一步").css("color","green");
    }
}


$(function(){
    $("#bt-login").click(function(){
        var u = $("#uid").val();
        $.ajax({
            type:'GET',
            url:'data/login.php',
            data:{uid:u},
            success:function(data) {
                console.log(data);
                if (data<0) {
                    $("p.alert").html("用户名已注册！");
                } else {
                    $(".modal").hide();
                    location.href="second-handhouse.html";
                    alert("欢迎"+u+"来到武汉链家网二手房");
                }
            },
            error:function(){
                alert("响应消息有错！请检查网络");
            }
        });
    });
});
