window.onload = function(){
	/*****************头部****************/
	//头部二维码
	$(".app_down").hover(function(){
		$(".header_code").stop().slideDown();
	},function(){
		$(".header_code").stop().slideUp();
	})
	//头部城市选择列表
	$(".city_select").hover(function(){
		$(".select_city").stop().slideDown();
	},function(){
		$(".select_city").stop().slideUp();
	})
	$(".select_city li a").click(function(){
		var str = $(".city_select span").html();
		$(".city_select span").html($(this).html());
		$(this).html(str);
	});
	//头部消息
	$(".message").hover(function(){
		$(".header_info").stop().slideDown();
	},function(){
		$(".header_info").stop().slideUp();
	})
	//判断用户是否登录
	var uname = localStorage.getItem("uname");
	if(uname){
		$(".login_register .login").css("display","none");
		$(".login_register .register").css("display","none");
		$(".login_register .myname").html(uname);
		//用户
		$(".login_register").hover(function(){
			$(".login_register ul").stop().slideDown();
		},function(){
			$(".login_register ul").stop().slideUp();
		})
	}
	//退出登录
	$(".login_register ul .exit").click(function(){
		$(".login_register .myname").html("");
		$(".login_register .login").css("display","inline-block");
		$(".login_register .register").css("display","inline-block");
		$(".login_register ul").css("display","none");
		localStorage.setItem("uname","");
		window.location.reload();
	});
	//判断
	$(".sub").click(function(){
		$.ajax({
			type:"post",
			url:"../php/login.php",
			data:{
				uname:$(".login_form #uname").val(),
				upwd:$(".login_form #upwd").val()
			},
			success:function(res){
				if(res=="0"){
					alert("用户名不存在或用户名错误");
				}else if(res=="1"){
					alert("密码错误");
				}else {
					localStorage.setItem("uname",res);
					location.href = "index.html";
				}
			}
		})
	});
}
  