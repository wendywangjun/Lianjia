<?php
	header("Content-Type:text/plain;charset=utf-8");
	@$uid = $_REQUEST['uid']or die("-1");
	@$uip = $_REQUEST['uip']or die("-2");
	@$uphone = $_REQUEST['uphone']or die("-3");
	require('init.php');
	$sql="insert into lj_address values(null,'$uid','$uip','$uphone')";
	$result = mysqli_query($conn,$sql);
	if($result===true){
	echo "1";
	}
	else{
	echo "-4";
	}
?>
