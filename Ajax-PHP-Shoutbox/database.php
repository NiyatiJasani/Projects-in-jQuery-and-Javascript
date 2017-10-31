<?php
//Connect to MYSQL
$con = mysqli_connect("localhost", "root", "password","jsshoutbox");

if(mysqli_connect_errno()){
    echo'Failed t connect: ' .mysqli_connect_error();
}