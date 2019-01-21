<?php
	header("content-type:text/html;charset=utf-8");
	$db = mysqli_connect("localhost","root","root","21cake");
	mysqli_query($db,"set names utf8");
	$sql = "select * from indexPro";
	$result = mysqli_query($db,$sql);
	while($row=mysqli_fetch_array($result)){
		$arr[]=$row;
	}
	$json = json_encode($arr);
	echo $json;
?>