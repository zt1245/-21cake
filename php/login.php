<?php
	header("content-type:text/html;charset=utf-8");
	$uname = $_POST["uname"];
	$upwd = $_POST["upwd"];
	$db = mysqli_connect("localhost","root","root","21cake");
	mysqli_query($db,"set names utf8");
	$sql = "select * from user where uname='$uname'";
	$result = mysqli_query($db,$sql);
	$arr = mysqli_fetch_array($result);
	if($arr){
		if($upwd == $arr["upwd"]){
			echo $uname;//代表登录成功
		}else{
			echo 1;//代表密码错误,登录失败
		}
	}else{
		echo 0;//代表用户名不存在
	}
?>