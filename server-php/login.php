<?php
$servername = "localhost";
$database = "app";
$username = "root";
$password = "";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);
$json = file_get_contents('php://input');
$data = json_decode($json, true);
$user_name=$data['user_name'];
$pass=$data['pass'];
$sql = "SELECT * FROM user WHERE user_name= '$user_name' and pass = '$pass'";
$check = mysqli_fetch_array(mysqli_query($conn, $sql));
if(isset($check)){
	$tc= 'sucess';
	$tcjson = json_encode($tc);
	echo $tcjson;
}else{
	$ktc= "Tai khoan khong chinh xacs. Vui long nhap lai!";
	$ktcjson = json_encode($ktc);
	echo $ktcjson;
}