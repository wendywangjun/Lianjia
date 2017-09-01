<?php
	header("Content-Type:text/plain;charset=utf-8");
	@$uid = $_REQUEST['uid']or die("-1");
	require('init.php');
	 $sql = "SELECT * FROM lj_address";
	$sql .= " WHERE uid = '$uid'";
	$result = mysqli_query($conn,$sql);
     $row = mysqli_fetch_assoc($result);
	if($row===NULL){
	echo "-2";
	}
	else{
	echo "1";
	}
?>