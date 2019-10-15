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
$sql = "SELECT * FROM user WHERE user_name= '$user_name'";
$result = $conn->query($sql);
if(mysqli_fetch_row($result)>0){
	$ht= "Tai khoan da ton tai";
	$htjson = json_encode($ht);
	echo $htjson;
}else{
	$sql = "INSERT INTO `user` (`id`, `user_name`, `pass`) VALUES ('null', '$user_name', '$pass')";
	$result = $conn->query($sql);
	$regis= 'Thanhcong';
	$regisJson = json_encode($regis);
	echo $regisJson;
}
