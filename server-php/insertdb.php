<?php
 
$servername = "localhost";

$database = "app";

$username = "root";

$password = "";

$conn = mysqli_connect($servername, $username, $password, $database);

$json = file_get_contents('php://input');
 
$data = json_decode($json, true);
 

$tens = $data['tens'];

$tloai = $data['tloai'];

$matg = $data['matg'];

$gia = $data['gia'];

$Sql_Query = "INSERT INTO sach(tens, tloai, matg, gia) values ('$tens','$tloai','$matg','$gia')";
 
 
if(mysqli_query($conn,$Sql_Query)){
 

$MSG = 'Successfully' ;
 

$json = json_encode($MSG);
 

 echo $json ;
 
 }
 else{
 
 echo 'Try Again';
 
 }
 mysqli_close($conn);
?>