<?php
    header("Content-Type:application/json;charset=utf-8");
    require('init.php');
    @$pageNo = $_REQUEST['pageNo'] or die('-3');
        $offset = ($pageNo-1)*8;
        $sql = "SELECT * FROM lj_product limit $offset,8";
        $result = mysqli_query($conn,$sql);
        $row = mysqli_fetch_all($result,MYSQLI_ASSOC);
        $str = json_encode($row);
        echo $str
?>