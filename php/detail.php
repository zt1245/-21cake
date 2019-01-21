<?php
	header("content-type:text/html;charset=utf-8");
	$name = $_POST["name"];
	$db = mysqli_connect("localhost","root","root","21cake");
	mysqli_query($db,"set names utf8");
	$sql = "select * from indexPro where name = '$name'";
	$result = mysqli_query($db,$sql);
	$arr = mysqli_fetch_array($result);
	$json = json_encode($arr);
	echo $json;
?>