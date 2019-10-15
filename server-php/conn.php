<?php
$servername = "localhost";
$database = "app";
$username = "root";
$password = "";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
$sql = "SELECT * FROM user";

$result = $conn->query($sql);

if ($result->num_rows >0) {
	while($row[] = $result->fetch_assoc()) {
 
		 $tem = $row;
		 
		 $json = json_encode($tem);
			}
		} else {
 			echo "No Results Found.";
		}
 	echo $json;
mysqli_close($conn);
?>