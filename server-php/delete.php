<?php
$servername = "localhost";
$database = "app";
$username = "root";
$password = "";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);

$json = file_get_contents('php://input');
 
$data = json_decode($json, true);
 
 $mas = $data['mas'];

 $Sql_Query = "DELETE FROM sach WHERE mas = '$mas'" ;
 
 if(mysqli_query($conn,$Sql_Query)){
 
	$MSG = 'Successfully.' ;
	 
	
	$json = json_encode($MSG);
	 
	
	 echo $json ;
 
}
 	else{
 
 	echo 'Try Again';
 
 }
 mysqli_close($conn);
?>