<?php
 
$servername = "localhost";

$database = "app";

$username = "root";

$password = "";

$conn = mysqli_connect($servername, $username, $password, $database);

$json = file_get_contents('php://input');
 
$data = json_decode($json, true);
 
$mas = $data['mas'];

$tens = $data['tens'];

$tentg = $data['tentg'];

$gia = $data['gia'];
 
$Sql_Query = "UPDATE sach SET gia = '$gia' WHERE mas = $mas";
 
 if(mysqli_query($conn,$Sql_Query)){
 

$MSG = 'Successfully' ;
 

$json = json_encode($MSG);
 

 echo $json ;
 
 }
 else{
 
 echo 'Try Again';
 
 }
 mysqli_close($con);
?>