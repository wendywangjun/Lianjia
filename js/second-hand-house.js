$('#seat li a').click(function(e){
    e.preventDefault();
    $(this).parent().addClass('active').siblings(".active").removeClass('active');
    var id=$(this).attr('href');
    $(id).addClass('active').siblings(".active").removeClass('active');
    $(this).children("span").addClass("active");
    $(this).parent("li").siblings().find("span").removeClass("active");
});
$('#seat3 .custom1').click(function(){
    $('.cu').slideToggle();
});
$('#seat3 .custom2').click(function(){
    $('.cc').slideToggle();
});
//房源列表
$('#six li').on('click',function(){
   $(this).addClass('active').siblings('.active').removeClass('active');
    var p=$(this).children('a').html();
    loadPage(p);
});
loadPage($('#six .active').children('a').html());
console.log("a"+$('#six .active').children('a').html());
function loadPage(page){
    $(function(){
        $.ajax({
            type:"GET",
            url:'data/lj.php',
            data:{pageNo:page},
            success:function(data){
                console.log(data);
                var html='';
                for(var i=0;i<data.length;i++){
                    var obj = data[i];
                    if(obj.ptimes){

                    html += `

                    <div class="row">
                        <div class="col-lg-3">
                            <img src="${obj.pic}" alt=""/>
                        </div>
                        <div class="col-lg-5">
                            <h4><a href="#"><b>${obj.pname}</b></a><span style="font-size:12px;border: 1px solid #00AE66; color: #fff; background-color: #00AE66">房主自荐</span></h4>
                            <p><i class="home"></i>${obj.ptext}</p>
                            <p><i class="fixed"></i>${obj.psun}</p>
                            <p><i class="star"></i>${obj.pte}</p>
                            <ul class="nav navbar-nav" >
                                <li class="year">${obj.pyear}</li>
                                <li class="times">${obj.ptimes}</li>
                            </ul>
                        </div>
                        <div class="col-lg-offset-8">
                            <p><a href="${obj.pid}">+加入对比</a></p>
                            <h3><span>${obj.price}</span></h3>
                            <h6>${obj.pii}</h6>
                        </div>
                    </div>`
                }else{
                        html += `

                    <div class="row">
                        <div class="col-lg-3">
                            <img src="${obj.pic}" alt=""/>
                        </div>
                        <div class="col-lg-5">
                            <h4><a href="#"><b>${obj.pname}</b></a><span style="font-size:12px;border: 1px solid #00AE66; color: #fff; background-color: #00AE66">房主自荐</span></h4>
                            <p><i class="home"></i>${obj.ptext}</p>
                            <p><i class="fixed"></i>${obj.psun}</p>
                            <p><i class="star"></i>${obj.pte}</p>
                            <ul class="nav navbar-nav" >
                                <li class="year">${obj.pyear}</li>
                            </ul>
                        </div>
                        <div class="col-lg-offset-8">
                            <p><a href="${obj.pid}">+加入对比</a></p>
                            <h3><span>${obj.price}</span></h3>
                            <h6>${obj.pii}</h6>
                        </div>
                    </div>`
                    }
                }

                $("#six .s0").html(html);
            },
            error:function(err){
                alert("失败"+err);
            }
        });
    })
}

//右侧弹框
$("div.sos").mouseenter(function(){
    $(this).children(':first').css("display","block");
});
$("div.sos").mouseleave(function(){
    $(this).children(':first').css("display","none");
});
//回到顶部
$("#top").on("click",function(){
    window.scrollTo(0,52);
});
//底部箭头
$("#phone").click(function(){
    $("phone").css("display","none")
});