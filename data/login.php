<?php
  header("Content-Type:text/plain;charset=utf-8");
  @$uname = $_REQUEST['uname']or die("-1");
  @$upwd = $_REQUEST['upwd']or die("-2");
  require('init.php');
  $sql = "SELECT * FROM lj_login";
  $sql .= " WHERE uname = '$uname' AND";
  $sql .= " upwd = '$upwd'";
  $result = mysqli_query($conn,$sql);
  $row = mysqli_fetch_assoc($result);
  if($row===NULL){
    echo "-3";
  }else{
    echo "1";
  }
?>