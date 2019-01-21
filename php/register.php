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
		echo 0;//用户名已存在
	}else{
		$psql = "insert into user (uname,upwd) values ('$uname','$upwd')";
		$res = mysqli_query($db,$psql);
		if($res){
			echo $uname;//注册成功
		}else{
			echo 2;//2代表注册失败
		}
	}
?>